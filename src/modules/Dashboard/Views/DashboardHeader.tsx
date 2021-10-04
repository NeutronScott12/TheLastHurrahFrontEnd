import React from 'react'
import { AppBar, Theme, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	linkStyle: {
		color: '#ededed',
		textDecoration: 'none',
	},
}))

export const DashboardHeader = () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Link className={classes.linkStyle} to="/dashboard/apps">
						<Typography variant="h6">Apps</Typography>
					</Link>
				</Toolbar>
			</AppBar>
		</div>
	)
}
