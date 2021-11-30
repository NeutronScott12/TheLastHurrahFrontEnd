import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import ReactDataGrid, { Column, SelectColumn } from 'react-data-grid'

import { LoadingComponent } from '../../../partials/Loading'
import { omit } from 'ramda'
import { IParams } from './AppContainer'
import { useErrorAndSuccess } from '../../../utils/hooks/errorAndSuccessHooks'
import {
	Choice,
	useBlockUsersFromApplicationMutation,
	useFetchApplicationAuthenticatedUsersQuery,
} from '../../../generated/graphql'
import { rowKeyGetter } from '../helpers'

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
				choice: choice,
				limit: 10,
				skip: 0,
			},
		},
	})

	const [blockUsers] = useBlockUsersFromApplicationMutation()

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

	const filterUsers = (choice: Choice) => {
		changeChoice(choice)
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

	const blockSelected = async () => {
		console.log('SELECTED', selected)
	}

	console.log('CHOICE', choice)

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
					variant={choice === Choice.All ? 'contained' : 'text'}
					onClick={() => filterUsers(Choice.All)}
				>
					All
				</Button>
				<Button
					className={classes.buttonStyle}
					variant={choice === Choice.Blocked ? 'contained' : 'text'}
					onClick={() => filterUsers(Choice.Blocked)}
				>
					Blocked
				</Button>
				<ReactDataGrid
					onSelectedRowsChange={changeSelected}
					selectedRows={selected}
					rows={rows}
					columns={columns}
					rowKeyGetter={rowKeyGetter}
				/>
			</>
		</div>
	)
}
