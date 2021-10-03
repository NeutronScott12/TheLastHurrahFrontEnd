import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { DataGrid, GridColDef } from '@material-ui/data-grid'
import moment from 'moment'

import {
	CommentModel,
	Sort,
	useFetchCommentsByApplicationIdQuery,
} from '../../../generated/graphql'
import { IParams } from './AppContainer'
import { makeStyles } from '@material-ui/styles'
import { LoadingComponent } from '../../../partials/Loading'

const columns: GridColDef[] = [
	{ field: 'body', headerName: 'Body', width: 500 },
	{ field: 'username', headerName: 'Username', width: 200 },
	{ field: 'created_at', headerName: 'Created At', width: 200 },
]

const useStyles = makeStyles({
	root: {
		'& .super-app-theme--header': {
			// backgroundColor: 'rgba(255, 7, 0, 0.55)',
		},
	},
	tableStyle: {
		color: '#ededed',
		'& .PrivateSwitchBase-input-27': {
			color: '#ededed',
		},
	},
})

interface ILocationState {
	state: {
		application_id: string
	}
}

export const CommentContainer = () => {
	const { application_name } = useParams() as IParams
	const location = useLocation() as ILocationState
	const classes = useStyles()

	console.log('LOCATION', location)

	const { data, loading } = useFetchCommentsByApplicationIdQuery({
		variables: {
			fetchCommentsByApplicationIdInput: {
				application_id: location.state && location.state.application_id,
				limit: 10,
				skip: 0,
				sort: Sort.Asc,
			},
		},
	})

	console.log('DATA', data)

	const formattedRows = () => {
		if (data) {
			if (
				data.fetch_comments_by_application_id &&
				data.fetch_comments_by_application_id.comments
			) {
				return data.fetch_comments_by_application_id.comments.reduce(
					// @ts-ignore
					(prev, curr: CommentModel, key) => {
						return [
							...prev,
							{
								body: curr.plain_text_body,
								username: curr.author.username,
								id: curr.id,
								created_at: moment(curr.created_at).format('l'),
							},
						]
					},
					[]
				)
			}
		}

		return []
	}

	const rows = formattedRows()

	return loading ? (
		<LoadingComponent />
	) : (
		<div className={classes.root} style={{ height: '100vh' }}>
			<h2>Comment Container</h2>
			<DataGrid
				className={classes.tableStyle}
				getRowId={(rows) => rows.id}
				//@ts-ignore
				rows={rows}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
				disableSelectionOnClick
			></DataGrid>
		</div>
	)
}
