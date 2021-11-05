import React from 'react'
import { makeStyles } from '@mui/styles'
import { DataGrid, GridColDef, GridRowData, GridRowId, GridState } from '@mui/x-data-grid'
import { Where } from '../../generated/graphql'
import { Alerts } from '../../partials/Alerts'

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

interface IDataGridGenerator {
	checkError: boolean
	errorMessage: string
	rows: GridRowData
	selected: GridRowId[]
	columns: GridColDef[]
	onChange: (
		params: GridState,
		event: {
			defaultMuiPrevented?: boolean | undefined
		}
	) => void
	deleteSelected: (permanent_delete: boolean) => Promise<void>
	approveSelected: () => Promise<void>
}

export const DataGridGenerator: React.FC<IDataGridGenerator> = ({
	children,
	columns,
	onChange,
	checkError,
	errorMessage,
	rows,
}) => {
	const classes = useStyles()

	console.log('DATA_ROWS', rows)

	return (
		<>
			<Alerts checkError={checkError} errorMessage={errorMessage} />
			{children}
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
		</>
	)
}
