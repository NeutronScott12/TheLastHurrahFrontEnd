import React, { useState } from 'react'
import { GridState } from '@mui/x-data-grid'
import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import ReactDataGrid, { Column, SelectColumn } from 'react-data-grid'

import { LoadingComponent } from '../../../partials/Loading'
import { omit } from 'ramda'
import { IParams } from './AppContainer'
import { useErrorAndSuccess } from '../../../utils/hooks/errorAndSuccessHooks'
import { Choice, useFetchApplicationAuthenticatedUsersQuery } from '../../../generated/graphql'

// { key: 'body', name: 'Body', width: '50%', resizable: true },

const columns: Column<IAuthenticatedUsers>[] = [
	SelectColumn,
	{ key: 'username', name: 'Username', width: '20%' },
	{ key: 'confirmed', name: 'Confirmed', width: '20%' },
	{ key: 'created_at', name: 'Created At', width: '20%' },
	{ key: 'last_active', name: 'Last Active', width: '20%' },
	{ key: 'status', name: 'Status', width: '20%' },
]

const useStyles = makeStyles({
	buttonStyle: {
		color: '#ededed',
		textDecoration: 'none',
		'& MuiButton-root': {
			color: '#ededed',
		},
		'& MuiButtonBase-root': {
			color: '#ededed',
		},
	},
})
interface IAuthenticatedUsers {
	confirmed: boolean
	last_active: Date
	username: string
	id: string
	created_at: Date
}

export const UsersContainer = () => {
	const { application_short_name } = useParams() as IParams
	const classes = useStyles()
	const { checkError, errorMessage } = useErrorAndSuccess()
	const [selected, changeSelected] = useState<ReadonlySet<string>>(() => new Set())
	const [choice, changeChoice] = useState<Choice>(Choice.All)
	const { data, loading } = useFetchApplicationAuthenticatedUsersQuery({
		variables: {
			fetchApplicationByShortNameInput: {
				application_short_name,
			},
			authenticatedUserInput: {
				choice: Choice.All,
				limit: 10,
				skip: 0,
			},
		},
	})

	// const onChange = (
	// 	params: GridState,
	// 	event: {
	// 		defaultMuiPrevented?: boolean | undefined
	// 	}
	// ) => {
	// 	// console.log('PARAMS', params)
	// 	// console.log('EVENT', event)

	// 	changeSelected(params.selection)
	// }

	const filterUsers = () => {
		changeChoice(Choice.All)
	}

	let rows: IAuthenticatedUsers[]

	console.log('DATA', data?.fetch_application_by_short_name.authenticated_users)

	if (data && data.fetch_application_by_short_name) {
		rows = data.fetch_application_by_short_name.authenticated_users.map((data) => {
			return omit(['__typename'], data)
		})
	} else {
		rows = []
	}

	const blockSelected = () => {}

	console.log('SELECTED', selected)

	console.log('ROWS', rows)

	return loading ? (
		<LoadingComponent />
	) : (
		<div style={{ marginTop: '1rem' }}>
			<>
				{selected.size > 0 ? (
					<Button
						className={classes.buttonStyle}
						onClick={() => {
							if (choice === Choice.Blocked) {
								blockSelected()
							}
						}}
					>
						Block
					</Button>
				) : (
					''
				)}
				<Button
					className={classes.buttonStyle}
					onClick={() => {
						if (choice === Choice.All) {
							blockSelected()
						}
					}}
				>
					All
				</Button>
				<Button
					className={classes.buttonStyle}
					onClick={() => {
						if (choice === Choice.Blocked) {
							filterUsers()
							blockSelected()
						}
					}}
				>
					Blocked
				</Button>
				<ReactDataGrid rows={rows} columns={columns} />
			</>
		</div>
	)
}
