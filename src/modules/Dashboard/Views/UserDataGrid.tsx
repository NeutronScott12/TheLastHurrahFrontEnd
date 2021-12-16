import React from 'react'
import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import ReactDataGrid, { Column, SelectColumn } from 'react-data-grid'

import { Choice } from '../../../generated/graphql'
import { IAuthenticatedUsers } from '../types'
import { rowKeyGetter } from '../helpers'

const columns: Column<IAuthenticatedUsers>[] = [
	SelectColumn,
	{ key: 'username', name: 'Username', width: '20%' },
	{ key: 'confirmed', name: 'Confirmed', width: '20%' },
	{ key: 'created_at', name: 'Created At', width: '20%' },
	{ key: 'last_active', name: 'Last Active', width: '20%' },
	{ key: 'status', name: 'Status', width: '20%' },
]

interface IUserDataGrid {
	selected: ReadonlySet<string>
	choice: Choice
	rows: IAuthenticatedUsers[]
	changeSelected: React.Dispatch<React.SetStateAction<ReadonlySet<string>>>
	filterUsers: (choice: Choice) => void
	blockSelected: () => Promise<void>
}

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

export const UserDataGrid: React.FC<IUserDataGrid> = ({
	selected,
	choice,
	rows,
	changeSelected,
	filterUsers,
	blockSelected,
}) => {
	const classes = useStyles()

	return (
		<div style={{ marginTop: '1rem' }}>
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
		</div>
	)
}
