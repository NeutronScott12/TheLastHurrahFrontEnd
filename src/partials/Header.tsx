import React from 'react'
import {
	AppBar as MuiAppBar,
	AppBarProps as MuiAppBarProps,
	Badge,
	IconButton,
	Theme,
	Toolbar,
} from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import LockIcon from '@material-ui/icons/Lock'
import HomeIcon from '@material-ui/icons/Home'

import { Link, useNavigate } from 'react-router-dom'
import { IS_LOGGED_IN } from '../graphql/graphql'
import { cache } from '../apollo/cache'
import { useLoggedIn } from '../utils/hooks/customApolloHooks'
import { ColorModeContext } from '../App'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) => ({
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		paddingRight: '2rem',
		justifyContent: 'flex-end',
		margin: '2rem',
		...theme.mixins.toolbar,
	},
	menuButton: {
		marginRight: 36,
	},
	menuButtonHidden: {
		display: 'none',
	},
	title: {
		flexGrow: 1,
	},
}))

interface IAppBarProps extends MuiAppBarProps {
	open: boolean
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<IAppBarProps>(({ theme, open }) => ({
	background: '#424242',
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}))

interface IMainHeader {
	handleDrawer: () => void
	open: boolean
}

export const MainHeader: React.FC<IMainHeader> = (props) => {
	const theme = useTheme()
	const classes = useStyles()
	const history = useNavigate()
	const { data } = useLoggedIn()
	const colorMode = React.useContext(ColorModeContext)

	let show
	let drawer

	const logOut = () => {
		// isLoggedInVar(false)
		cache.writeQuery({
			query: IS_LOGGED_IN,
			data: {
				isLoggedIn: false,
			},
		})
		localStorage.removeItem('token')

		history('/login')
	}

	if (data) {
		if (data.isLoggedIn) {
			show = (
				<>
					<Link style={{ color: '#f7f7f7' }} to="notifications">
						<IconButton
							style={{ paddingLeft: '2rem' }}
							className={classes.toolbarIcon}
							color="inherit"
						>
							<Badge badgeContent={4} color="secondary">
								<NotificationsIcon />
							</Badge>
						</IconButton>
					</Link>

					<IconButton
						style={{ paddingLeft: '2rem' }}
						onClick={() => logOut()}
						className={classes.toolbarIcon}
						color="inherit"
					>
						<ExitToAppIcon />
					</IconButton>
				</>
			)
			drawer = !props.open ? (
				<IconButton
					edge="start"
					color="inherit"
					aria-label="open drawer"
					onClick={props.handleDrawer}
					className={clsx(classes.menuButton, props.open && classes.menuButtonHidden)}
				>
					<MenuIcon />
				</IconButton>
			) : (
				''
			)
		} else {
			show = (
				<>
					<IconButton className={classes.toolbarIcon} color="inherit">
						<Link to="/register">
							<PersonAddIcon />
						</Link>
					</IconButton>
					<IconButton className={classes.toolbarIcon} color="inherit">
						<Link to="/login">
							<LockIcon />
						</Link>
					</IconButton>
				</>
			)
		}
	}

	return (
		<AppBar position="absolute" open={props.open}>
			<Toolbar className={classes.toolbar}>
				{drawer}
				<IconButton
					style={{ paddingLeft: '2rem' }}
					className={classes.toolbarIcon}
					color="inherit"
				>
					<Link to="/">
						<HomeIcon style={{ color: '#f7f7f7' }} />
					</Link>
				</IconButton>
				{show}
				<IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
					{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}
