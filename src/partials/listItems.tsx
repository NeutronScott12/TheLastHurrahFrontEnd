import React from 'react'
import { Link } from 'react-router-dom'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { makeStyles } from '@mui/styles'

import DashboardIcon from '@material-ui/icons/Dashboard'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People'
import BarChartIcon from '@material-ui/icons/BarChart'
import LayersIcon from '@material-ui/icons/Layers'
import AssignmentIcon from '@material-ui/icons/Assignment'

const useStyles = makeStyles(() => ({
	linkStyles: {
		textDecoration: 'none',
		color: '#f7f7f7',
	},
}))

interface IMainListItems {
	currentUser: {
		id: string
		username: string
	}
}

export const MainListItems: React.FC<IMainListItems> = ({ currentUser }) => {
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
			<Link to={`/${currentUser.username}`}>
				<ListItem button>
					<ListItemIcon>
						<PeopleIcon className={classes.linkStyles} />
					</ListItemIcon>
					<ListItemText primary="Customers" />
				</ListItem>
			</Link>

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
