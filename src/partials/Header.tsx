import React from 'react'
import {
	AppBar as MuiAppBar,
	AppBarProps as MuiAppBarProps,
	Badge,
	Divider,
	Grid,
	IconButton,
	Menu,
	Theme,
	Toolbar,
	Typography,
} from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import MenuIcon from '@mui/icons-material/Menu'
import clsx from 'clsx'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import LockIcon from '@mui/icons-material/Lock'
import HomeIcon from '@mui/icons-material/Home'
import AddIcon from '@mui/icons-material/Add'

import { Link, useNavigate, useParams } from 'react-router-dom'
import { IS_LOGGED_IN } from '../graphql/graphql'
import { cache } from '../apollo/cache'
import { useLoggedIn } from '../utils/hooks/customApolloHooks'
import { ColorModeContext } from '../App'
import { LoadingComponent } from './Loading'
import { useFetchApplicationsByOwnerIdQuery } from '../generated/graphql'

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
		//@ts-ignore
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

export interface IHeaderParams {
	application_short_name: string
}

export const MainHeader: React.FC<IMainHeader> = (props) => {
	const params = useParams() as unknown
	const { loading, data: applicationData } = useFetchApplicationsByOwnerIdQuery()

	const { application_short_name } = params as IHeaderParams

	console.log('PARAMS', params)
	console.log('APPLICATION_SHORT_NAME', application_short_name)

	const theme = useTheme()
	const classes = useStyles()
	const history = useNavigate()
	const { data } = useLoggedIn()
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

	const colorMode = React.useContext(ColorModeContext)

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

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
					<Typography
						onClick={handleOpenUserMenu}
						style={{ margin: '0 2rem', cursor: 'pointer', fontWeight: 'bold' }}
					>
						Application
					</Typography>
					<Menu
						style={{ minWidth: '400px' }}
						sx={{ mt: '45px', ml: '25px' }}
						id="menu-appbar"
						anchorEl={anchorElUser}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
					>
						{loading ? (
							<LoadingComponent />
						) : (
							<span>
								<Grid
									style={{ width: '20rem', padding: '1rem' }}
									direction="row"
									container
									spacing={2}
								>
									<Grid item xs={8}>
										Applications
									</Grid>
									<Grid item xs={4}>
										<Link to="/add_application">
											<AddIcon />
										</Link>
									</Grid>
									<Divider />
									{applicationData?.fetch_applications_by_owner_id.map(
										(application) => {
											return (
												<Grid key={application.id} item xs={12}>
													<Link
														to={`/dashboard/${application.short_name}`}
													>
														{application.application_name}
													</Link>
												</Grid>
											)
										}
									)}
								</Grid>
							</span>
						)}
					</Menu>
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
