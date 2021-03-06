import React, { useState, useEffect, lazy } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'

import {
	Sort,
	useApproveCommentMutation,
	useDeleteManyCommentsMutation,
	useFetchCommentsByApplicationByShortNameQuery,
	useFetchCommentStatsQuery,
	Where,
} from '../../../generated/graphql'
import { IParams } from './AppContainer'
import { LoadingComponent } from '../../../partials/Loading'
import { formattedRows } from '../helpers'
import { CommentDataGrid } from '../Views/CommentDataGrid'
import { IFormattedRow } from '../types'
import { useErrorAndSuccess } from '../../../utils/hooks/errorAndSuccessHooks'
// import { CommentGraph } from '../Views/CommentGraph'

const CommentGraph = lazy(() =>
	import('../Views/CommentGraph').then((module) => ({
		default: module.CommentGraph,
	}))
)

export const CommentContainer = () => {
	const params = useParams() as unknown
	const { application_short_name } = params as IParams
	const [deleteManyComments] = useDeleteManyCommentsMutation()
	const [approveComments] = useApproveCommentMutation()
	const [where, changeWhere] = useState<Where>(Where.All)
	const [selected, setSelectedRows] = useState<ReadonlySet<string>>(() => new Set())

	const { errorMessage, setError, checkError, setErrorMessage } = useErrorAndSuccess()

	let rows: IFormattedRow[] | []

	const { data, loading, refetch, error } = useFetchCommentsByApplicationByShortNameQuery({
		variables: {
			fetchCommentsByApplicationShortNameInput: {
				application_short_name,
				limit: 10,
				skip: 0,
				sort: Sort.Asc,
				where,
			},
		},
	})

	const { loading: commentStatLoading, data: commentStatsData } = useFetchCommentStatsQuery({
		variables: {
			fetchCommentStatsInput: {
				start_date: moment().startOf('month').format('YYYY-MM-DD'),
				end_date: moment(new Date()).format('YYYY-MM-DD'),
			},
		},
	})

	useEffect(() => {
		if (error && checkError !== false) {
			setErrorMessage('An error in fetching comments occured')
			setError(true)
		}
	}, [error, data, checkError, setError, setErrorMessage])

	const filterComments = async (where: Where) => {
		changeWhere(where)
		await refetch({
			fetchCommentsByApplicationShortNameInput: {
				application_short_name,
				limit: 10,
				skip: 0,
				sort: Sort.Asc,
				where,
			},
		})
	}

	const deleteSelected = async (permanent_delete: boolean) => {
		let result = Array.from(selected)

		try {
			await deleteManyComments({
				variables: {
					deleteManyCommentsInput: { comment_ids: result, permanent_delete },
				},
			})
			setSelectedRows(() => new Set())
			await refetch()
		} catch (error) {
			if (error instanceof Error) {
				setErrorMessage(error.message)
				setError(true)
			}
		}
	}

	const approveSelected = async () => {
		try {
			const arr = Array.from(selected)
			await approveComments({
				variables: {
					approveCommentsInput: {
						comment_ids: arr,
					},
				},
			})
			await refetch()
		} catch (error) {
			if (error instanceof Error) {
				setErrorMessage(error.message)
				setError(true)
			}
		}
	}

	if (
		data?.fetch_comments_by_application_short_name &&
		data.fetch_comments_by_application_short_name.comments
	) {
		rows = formattedRows(data.fetch_comments_by_application_short_name.comments)
	} else {
		rows = []
	}

	return loading ? (
		<LoadingComponent />
	) : (
		<div>
			<h2>Comment Table</h2>
			<CommentDataGrid
				selected={selected}
				approveSelected={approveSelected}
				filterComments={filterComments}
				onSelectedRowsChange={setSelectedRows}
				where={where}
				deleteSelected={deleteSelected}
				rows={rows}
				checkError={checkError}
				errorMessage={errorMessage}
			/>
			{commentStatLoading ? (
				<LoadingComponent />
			) : (
				<div>
					{commentStatsData ? (
						<CommentGraph
							info={commentStatsData.fetch_comment_stats.comments_per_day}
						/>
					) : (
						''
					)}
				</div>
			)}
		</div>
	)
}
