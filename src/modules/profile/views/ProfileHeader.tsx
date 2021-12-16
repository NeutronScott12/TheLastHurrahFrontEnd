import React from 'react'
import { AppBar, Theme, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { Link } from 'react-router-dom'
import { useCurrentUserClient } from '../../../utils/hooks/customApolloHooks'

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

export const ProfileHeader = () => {
	const classes = useStyles()
	const { data } = useCurrentUserClient()

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Link
						className={classes.linkStyle}
						to={`/${data?.current_user.username}/comments`}
					>
						<Typography variant="h6">Comments</Typography>
					</Link>
					<Link className={classes.linkStyle} to="/dashboard/apps">
						<Typography variant="h6">Threads</Typography>
					</Link>
					<Link className={classes.linkStyle} to="/dashboard/apps">
						<Typography variant="h6">Recommended</Typography>
					</Link>
				</Toolbar>
			</AppBar>
		</div>
	)
}
