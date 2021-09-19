import React, { useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core'

import { MainHeader } from './partials/Header'
import { MainDrawer } from './partials/Drawer'
import { MainContainer } from './partials/MainContainer'

import { IS_LOGGED_IN } from './graphql/graphql'
import { cache } from './apollo/cache'
import { useCurrentUserQuery } from './generated/graphql'

import { SiteRouter } from './router'
import { LoadingComponent } from './partials/Loading'
import { useCurrentUser } from './utils/hooks/customApolloHooks'

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		background: '#2d2d2d',
		color: '#f7f7f7',
	},
}))

// const theme = createMui({
//     palette: {
//       secondary: {
//         main: "#E33E7F"
//       },

//       formControl: {
//         color: "black"
//       }
//     }
//   });

function App() {
	const classes = useStyles()
	const { data: currentUserData } = useCurrentUser()
	const { data, loading } = useCurrentUserQuery()

	useEffect(() => {
		if (data) {
			cache.writeQuery({
				query: IS_LOGGED_IN,
				data: {
					isLoggedIn: true,
				},
			})
		}
	}, [data])

	const [open, setOpen] = React.useState(false)

	const handleDrawer = () => {
		setOpen(!open)
	}

	return loading && !data ? (
		<LoadingComponent />
	) : (
		<div className={classes.root}>
			<CssBaseline />
			<MainHeader handleDrawer={handleDrawer} open={open} />
			<MainDrawer handleDrawer={handleDrawer} open={open} />
			<MainContainer>
				<SiteRouter
					loggedIn={currentUserData?.isLoggedIn ? currentUserData.isLoggedIn : false}
				/>
			</MainContainer>
		</div>
	)
}

export default App
