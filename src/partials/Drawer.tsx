import React from 'react'

import Drawer from '@material-ui/core/Drawer'
import { Divider, IconButton, List, makeStyles } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import clsx from 'clsx'
import { MainListItems, SecondaryListItems } from './listItems'
import { useCurrentUser } from '../utils/hooks/customApolloHooks'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    drawerStyles: {
        background: '#424242',
        color: 'white',
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
}))

interface IMainHeader {
    handleDrawer: () => void
    open: boolean
}

export const MainDrawer: React.FC<IMainHeader> = (props) => {
    const classes = useStyles()

    const { data } = useCurrentUser()

    return data && !data.isLoggedIn ? (
        <div></div>
    ) : (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(
                    classes.drawerPaper,
                    !props.open && classes.drawerPaperClose,
                    classes.drawerStyles,
                ),
            }}
            open={props.open}
        >
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
