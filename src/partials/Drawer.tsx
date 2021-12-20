import React from 'react'

import { Divider, IconButton, List, Theme, Drawer as MuiDrawer } from '@mui/material'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { MainListItems } from './listItems'
import { useLoggedIn } from '../utils/hooks/customApolloHooks'
import { useCurrentUserQuery } from '../generated/graphql'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) => ({
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		'& .MuiDrawer-paper': {
			background: '#424242',
			color: 'white',
			position: 'relative',
			whiteSpace: 'nowrap',
			width: drawerWidth,
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
			boxSizing: 'border-box',
			...(!open && {
				overflowX: 'hidden',
				transition: theme.transitions.create('width', {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen,
				}),
				width: theme.spacing(7),
				[theme.breakpoints.up('sm')]: {
					width: theme.spacing(9),
				},
			}),
		},
	})
)

interface IMainHeader {
	handleDrawer: () => void
	open: boolean
}

export const MainDrawer: React.FC<IMainHeader> = ({ handleDrawer, open }) => {
	const classes = useStyles()
	const { data: userData } = useCurrentUserQuery()

	const { data } = useLoggedIn()

	console.log('MAIN_DRAWER', data)
	console.log('USER_DATA', userData)

	return data && !data.isLoggedIn ? (
		<div></div>
	) : (
		<Drawer variant="permanent" open={open}>
			<div className={classes.toolbarIcon}>
				<IconButton onClick={handleDrawer}>
					<ChevronLeftIcon style={{ color: '#f7f7f7' }} />
				</IconButton>
			</div>
			<Divider />
			<List>
				{userData && userData.current_user ? (
					<MainListItems currentUser={userData.current_user} />
				) : (
					''
				)}
			</List>
			{/* <Divider />
			<List>
				<SecondaryListItems />
			</List> */}
		</Drawer>
	)
}
