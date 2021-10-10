import React from 'react'

import { Divider, IconButton, List, Theme, Drawer as MuiDrawer } from '@mui/material'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { MainListItems, SecondaryListItems } from './listItems'
import { useLoggedIn } from '../utils/hooks/customApolloHooks'

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

export const MainDrawer: React.FC<IMainHeader> = (props) => {
	const classes = useStyles()

	const { data } = useLoggedIn()

	return data && !data.isLoggedIn ? (
		<div></div>
	) : (
		<Drawer variant="permanent" open={props.open}>
			<div className={classes.toolbarIcon}>
				<IconButton onClick={props.handleDrawer}>
					<ChevronLeftIcon style={{ color: '#f7f7f7' }} />
				</IconButton>
			</div>
			<Divider />
			<List>
				<MainListItems />
			</List>
			<Divider />
			<List>
				<SecondaryListItems />
			</List>
		</Drawer>
	)
}
