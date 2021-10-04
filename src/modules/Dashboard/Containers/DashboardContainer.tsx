import React from 'react'
import { Grid } from '@mui/material'

import { DisplayApps } from '../components/DisplayApps/DisplayApps'
// import { displayAppUseStyles } from '../styles/dashBoardStyles'

export const AccountContainer: React.FC = () => {
	// const classes = displayAppUseStyles()

	return (
		<Grid style={{ background: 'lightblue', marginTop: '1rem' }}>
			<DisplayApps />
		</Grid>
	)
}
