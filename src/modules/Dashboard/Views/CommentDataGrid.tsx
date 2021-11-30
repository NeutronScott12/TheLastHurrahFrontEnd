import React from 'react'
import { makeStyles } from '@mui/styles'
import ReactDataGrid, { SelectColumn } from 'react-data-grid'
import { Button } from '@mui/material'

import { Where } from '../../../generated/graphql'
import { Alerts } from '../../../partials/Alerts'
import { IFormattedRow } from '../types'
import { rowKeyGetter } from '../helpers'

const useStyles = makeStyles({
	root: {
		marginTop: '2rem',
		'& .super-app-theme--header': {
			// backgroundColor: 'rgba(255, 7, 0, 0.55)',
		},
	},
	tableStyle: {
		minHeight: '50vh',
		color: '#ededed',
		'& .PrivateSwitchBase-input-27': {
			color: '#ededed',
		},
		'& .MuiDataGrid-cell': {
			color: '#ededed',
		},
		'& .MuiSvgIcon-root': {
			color: '#ededed',
		},
		'& .MuiDataGrid-columnHeaderTitle': {
			color: '#ededed',
		},
		'& .MuiDataGrid-sortIcon': {
			color: '#ededed',
		},
		'& .MuiDataGrid-window': {
			color: '#ededed',
		},
		'& .MuiDataGrid-root': {
			color: '#ededed !important',
		},
	},
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

const columns = [
	SelectColumn,
	{ key: 'body', name: 'Body', width: '50%', resizable: true },
	{ key: 'username', name: 'Username', width: '20%', resizable: true },
	{ key: 'reports', name: 'Reports', width: '20%', resizable: true },
	{ key: 'created_at', name: 'Created At', width: '10%', resizable: true },
]

interface ICommentDataGrid {
	checkError: boolean
	errorMessage: string
	rows: IFormattedRow[] | []
	selected: ReadonlySet<string>
	where: Where
	onSelectedRowsChange: React.Dispatch<React.SetStateAction<ReadonlySet<string>>>
	// onChange: (
	// 	params: GridState,
	// 	event: {
	// 		defaultMuiPrevented?: boolean | undefined
	// 	}
	// ) => void
	deleteSelected: (permanent_delete: boolean) => Promise<void>
	approveSelected: () => Promise<void>
	filterComments: (where: Where) => Promise<void>
}

export const CommentDataGrid: React.FC<ICommentDataGrid> = ({
	checkError,
	errorMessage,
	rows,
	selected,
	where,
	onSelectedRowsChange,
	// onChange,
	deleteSelected,
	filterComments,
	approveSelected,
}) => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Alerts checkError={checkError} errorMessage={errorMessage} />
			{selected.size > 0 ? (
				<>
					<Button
						className={classes.buttonStyle}
						onClick={() => {
							if (where === Where.Deleted) {
								deleteSelected(true)
							} else {
								deleteSelected(false)
							}
						}}
					>
						Delete
					</Button>
					<Button className={classes.buttonStyle}>Approve</Button>
				</>
			) : (
				''
			)}

			<Button
				style={{ color: '#ededed' }}
				className={classes.buttonStyle}
				variant={where === Where.Pending ? 'contained' : 'text'}
				onClick={() => filterComments(Where.Pending)}
			>
				Pending
			</Button>
			<Button
				style={{ color: '#ededed' }}
				className={classes.buttonStyle}
				variant={where === Where.Appoved ? 'contained' : 'text'}
				onClick={() => filterComments(Where.Appoved)}
			>
				Approved
			</Button>
			<Button
				style={{ color: '#ededed' }}
				className={classes.buttonStyle}
				variant={where === Where.Spam ? 'contained' : 'text'}
				onClick={() => filterComments(Where.Spam)}
			>
				Spam
			</Button>
			<Button
				style={{ color: '#ededed' }}
				variant={where === Where.Deleted ? 'contained' : 'text'}
				className={classes.buttonStyle}
				onClick={() => filterComments(Where.Deleted)}
			>
				Deleted
			</Button>
			<Button
				style={{ color: '#ededed' }}
				variant={where === Where.All ? 'contained' : 'text'}
				className={classes.buttonStyle}
				onClick={() => filterComments(Where.All)}
			>
				All
			</Button>
			<ReactDataGrid
				selectedRows={selected}
				onSelectedRowsChange={onSelectedRowsChange}
				rows={rows}
				columns={columns}
				onRowsChange={(data) => console.log('CHANGE', data)}
				rowKeyGetter={rowKeyGetter}
			/>
		</div>
	)
}
