import React from 'react'
import { makeStyles } from '@mui/styles'
import { Button } from '@mui/material'
import Alert from '@mui/material/Alert'
import { DataGrid, GridColDef, GridRowId, GridState } from '@mui/x-data-grid'
import { IComments } from '../types'
import { Where } from '../../../generated/graphql'

const useStyles = makeStyles({
	root: {
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
	},
	buttonStyle: {
		color: '#ededed',
	},
})

const columns: GridColDef[] = [
	{ field: 'body', headerName: 'Body', width: 500 },
	{ field: 'username', headerName: 'Username', width: 200 },
	{ field: 'created_at', headerName: 'Created At', width: 200 },
]

interface ICommentDataGrid {
	checkError: boolean
	errorMessage: string
	rows: IComments | undefined
	selected: GridRowId[]
	onChange: (
		params: GridState,
		event: {
			defaultMuiPrevented?: boolean | undefined
		}
	) => void
	deleteSelected: () => Promise<void>
	filterComments: (where: Where) => Promise<void>
}

export const CommentDataGrid: React.FC<ICommentDataGrid> = ({
	checkError,
	errorMessage,
	rows,
	selected,
	onChange,
	deleteSelected,
	filterComments,
}) => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<h2>Comment Container</h2>
			{checkError ? <Alert severity="error">{errorMessage}</Alert> : ''}
			{selected.length > 0 ? (
				<Button className={classes.buttonStyle} onClick={deleteSelected}>
					Delete
				</Button>
			) : (
				''
			)}

			<Button className={classes.buttonStyle} onClick={() => filterComments(Where.Pending)}>
				Pending
			</Button>
			<Button className={classes.buttonStyle} onClick={() => filterComments(Where.Appoved)}>
				Approved
			</Button>
			<Button className={classes.buttonStyle} onClick={() => filterComments(Where.Spam)}>
				Spam
			</Button>
			<Button className={classes.buttonStyle} onClick={() => filterComments(Where.Deleted)}>
				Deleted
			</Button>
			<Button className={classes.buttonStyle} onClick={() => filterComments(Where.All)}>
				All
			</Button>
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
				onStateChange={onChange}
			></DataGrid>
		</div>
	)
}
