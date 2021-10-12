import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { GridRowId, GridState } from '@mui/x-data-grid'

import {
	Sort,
	useApproveCommentMutation,
	useDeleteManyCommentsMutation,
	useFetchCommentsByApplicationByShortNameQuery,
	Where,
} from '../../../generated/graphql'
import { IParams } from './AppContainer'
import { LoadingComponent } from '../../../partials/Loading'
import { formattedRows } from '../helpers'
import { CommentDataGrid } from '../Views/CommentDataGrid'

export const CommentContainer = () => {
	const { application_short_name } = useParams() as IParams
	const [deleteManyComments] = useDeleteManyCommentsMutation()
	const [approveComments] = useApproveCommentMutation()
	const [where, changeWhere] = useState<Where>(Where.Pending)
	const [selected, changeSelected] = useState<GridRowId[]>([])
	const [checkError, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	let rows

	const { data, loading, refetch } = useFetchCommentsByApplicationByShortNameQuery({
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

	const onChange = (
		params: GridState,
		event: {
			defaultMuiPrevented?: boolean | undefined
		}
	) => {
		// console.log('PARAMS', params)
		// console.log('EVENT', event)

		changeSelected(params.selection)
	}

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
		console.log('SELECTED', selected)

		const arr = selected as string[]

		console.log('PERMANENT_DELETE', permanent_delete)

		try {
			await deleteManyComments({
				variables: {
					deleteManyCommentsInput: { comment_ids: arr, permanent_delete },
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

	const approveSelected = async () => {
		try {
			const arr = selected as string[]
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
		rows = formattedRows(data.fetch_comments_by_application_short_name.comments || [])
	}

	return loading ? (
		<LoadingComponent />
	) : (
		<CommentDataGrid
			selected={selected}
			approveSelected={approveSelected}
			filterComments={filterComments}
			onChange={onChange}
			where={where}
			deleteSelected={deleteSelected}
			rows={rows}
			checkError={checkError}
			errorMessage={errorMessage}
		/>
	)
}
