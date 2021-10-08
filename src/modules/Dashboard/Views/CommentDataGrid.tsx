import React from 'react'
import { makeStyles } from '@mui/styles'
import { Button } from '@mui/material'
import Alert from '@mui/material/Alert'
import { DataGrid, GridColDef, GridRowId, GridState } from '@mui/x-data-grid'
import { IComments } from '../types'
import { Sort, Where } from '../../../generated/graphql'

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

const columns: GridColDef[] = [
	{ field: 'body', headerName: 'Body', width: 500 },
	{ field: 'username', headerName: 'Username', width: 200 },
	{ field: 'reports', headerName: 'Reports', width: 200 },
	{ field: 'created_at', headerName: 'Created At', width: 200 },
]

interface ICommentDataGrid {
	checkError: boolean
	errorMessage: string
	rows: IComments | undefined
	selected: GridRowId[]
	where: Where
	onChange: (
		params: GridState,
		event: {
			defaultMuiPrevented?: boolean | undefined
		}
	) => void
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
	onChange,
	deleteSelected,
	filterComments,
	approveSelected,
}) => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			{checkError ? <Alert severity="error">{errorMessage}</Alert> : ''}
			{selected.length > 0 ? (
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
					<Button className={classes.buttonStyle} onClick={approveSelected}>
						Approve
					</Button>
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
