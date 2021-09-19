import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People'
import BarChartIcon from '@material-ui/icons/BarChart'
import LayersIcon from '@material-ui/icons/Layers'
import AssignmentIcon from '@material-ui/icons/Assignment'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    linkStyles: {
        textDecoration: 'none',
        color: '#f7f7f7',
    },
}))

export const MainListItems = () => {
    const classes = useStyles()

    return (
        <div>
            <ListItem button>
                <Link to="/dashboard">
                    <ListItemIcon>
                        <DashboardIcon className={classes.linkStyles} />
                    </ListItemIcon>
                </Link>
                <ListItemText primary="Dashboard" />
            </ListItem>
            <Link to="/about">
                <ListItem button>
                    <ListItemIcon>
                        <ShoppingCartIcon className={classes.linkStyles} />
                    </ListItemIcon>
                    <ListItemText
                        style={{ color: '#f7f7f7', textDecoration: 'none' }}
                        primary="Orders"
                    />
                </ListItem>
            </Link>
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon className={classes.linkStyles} />
                </ListItemIcon>
                <ListItemText primary="Customers" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <BarChartIcon className={classes.linkStyles} />
                </ListItemIcon>
                <ListItemText primary="Reports" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <LayersIcon className={classes.linkStyles} />
                </ListItemIcon>
                <ListItemText primary="Integrations" />
            </ListItem>
        </div>
    )
}

export const SecondaryListItems = () => {
    const classes = useStyles()
    return (
        <div>
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon className={classes.linkStyles} />
                </ListItemIcon>
                <ListItemText primary="Current month" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon className={classes.linkStyles} />
                </ListItemIcon>
                <ListItemText primary="Last quarter" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon className={classes.linkStyles} />
                </ListItemIcon>
                <ListItemText primary="Year-end sale" />
            </ListItem>
        </div>
    )
}
