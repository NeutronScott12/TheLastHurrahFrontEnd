import React, { Suspense, useEffect, useState } from 'react'
import { CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { makeStyles, ThemeProvider } from '@mui/styles'

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

const theme = createTheme()

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
	const [loading, changeLoading] = useState(true)
	const { data, loading: userLoading } = useCurrentUserQuery()

	useEffect(() => {
		if (data) {
			cache.writeQuery({
				query: IS_LOGGED_IN,
				data: {
					isLoggedIn: true,
				},
			})
			changeLoading(false)
		} else {
			changeLoading(false)
		}
	}, [data])

	const [open, setOpen] = React.useState(false)

	const handleDrawer = () => {
		setOpen(!open)
	}

	return loading || (userLoading && !data) ? (
		<LoadingComponent />
	) : (
		<ThemeProvider theme={theme}>
			<div className={classes.root}>
				<CssBaseline />
				<MainHeader handleDrawer={handleDrawer} open={open} />
				<MainDrawer handleDrawer={handleDrawer} open={open} />
				<MainContainer>
					<Suspense fallback={<LoadingComponent />}>
						<SiteRouter
							loggedIn={
								currentUserData?.isLoggedIn ? currentUserData.isLoggedIn : false
							}
						/>
					</Suspense>
				</MainContainer>
			</div>
		</ThemeProvider>
	)
}

export default App
