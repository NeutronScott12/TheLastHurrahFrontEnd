import React, { useState } from 'react'
import { GridColDef, GridRowData, GridRowId, GridState } from '@mui/x-data-grid'
import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { LoadingComponent } from '../../../partials/Loading'
import { omit } from 'ramda'
import { DataGridGenerator } from '../../../utils/widgets/DataGridGenerator'
import { IParams } from './AppContainer'
import { useErrorAndSuccess } from '../../../utils/hooks/errorAndSuccessHooks'
import { Choice, useFetchApplicationAuthenticatedUsersQuery } from '../../../generated/graphql'

const columns: GridColDef[] = [
	{ field: 'username', headerName: 'Username', width: 200 },
	{ field: 'confirmed', headerName: 'Confirmed', width: 200 },
	{ field: 'created_at', headerName: 'Created At', width: 200 },
	{ field: 'last_active', headerName: 'Last Active', width: 200 },
	{ field: 'status', headerName: 'Status', width: 200 },
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
	const [selected, changeSelected] = useState<GridRowId[]>([])
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

	const filterUsers = () => {
		changeChoice(Choice.All)
	}

	let rows: GridRowData | IAuthenticatedUsers[]

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
			<DataGridGenerator
				checkError={checkError}
				errorMessage={errorMessage}
				rows={rows}
				columns={columns}
				onChange={onChange}
				//@ts-ignore
				selected={(data: any) => {
					console.log(data)
					return columns
				}}
			>
				<>
					{selected.length > 0 ? (
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
				</>
			</DataGridGenerator>
		</div>
	)
}
