import React from 'react'
import {
    AppBar,
    Badge,
    IconButton,
    makeStyles,
    Toolbar,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import LockIcon from '@material-ui/icons/Lock'
import HomeIcon from '@material-ui/icons/Home'

import { Link, useNavigate } from 'react-router-dom'
import { IS_LOGGED_IN } from '../graphql/graphql'
import { cache } from '../apollo/cache'
import { useCurrentUser } from '../utils/hooks/customApolloHooks'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        paddingRight: theme.spacing(3),
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        background: '#424242',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
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

interface IMainHeader {
    handleDrawer: () => void
    open: boolean
}

export const MainHeader: React.FC<IMainHeader> = (props) => {
    const classes = useStyles()
    const history = useNavigate()
    const { data } = useCurrentUser()
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
                    <IconButton
                        onClick={() => logOut()}
                        className={classes.toolbarIcon}
                        color="inherit"
                    >
                        <ExitToAppIcon />
                    </IconButton>
                    <IconButton className={classes.toolbarIcon} color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </>
            )
            drawer = (
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawer}
                    className={clsx(
                        classes.menuButton,
                        props.open && classes.menuButtonHidden,
                    )}
                >
                    <MenuIcon />
                </IconButton>
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
        <AppBar
            position="absolute"
            className={clsx(classes.appBar, props.open && classes.appBarShift)}
        >
            <Toolbar className={classes.toolbar}>
                {drawer}
                <IconButton className={classes.toolbarIcon} color="inherit">
                    <Link to="/">
                        <HomeIcon style={{ color: '#f7f7f7' }} />
                    </Link>
                </IconButton>
                {show}
            </Toolbar>
        </AppBar>
    )
}
