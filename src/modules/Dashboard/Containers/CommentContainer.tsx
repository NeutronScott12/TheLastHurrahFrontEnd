import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { GridRowId, GridState } from '@mui/x-data-grid'

import {
	Sort,
	useDeleteManyCommentsMutation,
	useFetchCommentsByApplicationNameQuery,
	Where,
} from '../../../generated/graphql'
import { IParams } from './AppContainer'
import { LoadingComponent } from '../../../partials/Loading'
import { formattedRows } from '../helpers'
import { CommentDataGrid } from '../Views/CommentDataGrid'

export const CommentContainer = () => {
	const { application_name } = useParams() as IParams
	const [selected, changeSelected] = useState<GridRowId[]>([])
	const [deleteManyComments] = useDeleteManyCommentsMutation()
	const [checkError, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	let rows

	const { data, loading, refetch } = useFetchCommentsByApplicationNameQuery({
		variables: {
			fetchCommentsByApplicationName: {
				application_name,
				limit: 10,
				skip: 0,
				sort: Sort.Asc,
				where: Where.Pending,
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
		await refetch({
			fetchCommentsByApplicationName: {
				application_name,
				limit: 10,
				skip: 0,
				sort: Sort.Asc,
				where,
			},
		})
	}

	const deleteSelected = async () => {
		console.log('SELECTED', selected)

		const arr = selected as string[]

		try {
			await deleteManyComments({
				variables: {
					deleteManyCommentsInput: { comment_ids: arr },
				},
			})
		} catch (error) {
			if (error instanceof Error) {
				setErrorMessage(error.message)
				setError(true)
			}
		}
	}

	if (
		data?.fetch_comments_by_application_name &&
		data.fetch_comments_by_application_name.comments
	) {
		rows = formattedRows(data.fetch_comments_by_application_name.comments)
	}

	return loading ? (
		<LoadingComponent />
	) : (
		<CommentDataGrid
			selected={selected}
			filterComments={filterComments}
			onChange={onChange}
			deleteSelected={deleteSelected}
			rows={rows}
			checkError={checkError}
			errorMessage={errorMessage}
		/>
	)
}
