import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { DataGrid, GridColDef } from '@material-ui/data-grid'
import moment from 'moment'

import {
	CommentModel,
	FetchApplicationByNameQuery,
	FetchApplicationByNameQueryVariables,
} from '../../../generated/graphql'
import { IParams } from './AppContainer'
import { makeStyles } from '@material-ui/styles'
import { LoadingComponent } from '../../../partials/Loading'

const columns: GridColDef[] = [
	{ field: 'body', headerName: 'Body', width: 500 },
	{ field: 'username', headerName: 'Username', width: 200 },
	{ field: 'created_at', headerName: 'Created At', width: 200 },
]

const APPLICATION_COMMENTS = gql`
	query ApplicationComments($name: String!) {
		find_one_application_by_name(name: $name) {
			id
			application_name
			comments {
				id
				body
				created_at
				author {
					username
					id
					email
				}
				replies {
					id
					body
					author {
						id
						email
					}
				}
			}
		}
	}
`

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

export const CommentContainer = () => {
	const { application_name } = useParams() as IParams
	const classes = useStyles()

	const { data, loading } = useQuery<
		FetchApplicationByNameQuery,
		FetchApplicationByNameQueryVariables
	>(APPLICATION_COMMENTS, {
		variables: {
			name: application_name,
		},
	})

	const formattedRows = () => {
		if (data) {
			if (data.find_one_application_by_name) {
				return data?.find_one_application_by_name.comments.reduce(
					// @ts-ignore
					(prev, curr: CommentModel, key) => {
						return [
							...prev,
							{
								body: curr.body,
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
