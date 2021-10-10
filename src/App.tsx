import React, { Suspense, useEffect } from 'react'
import { CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { makeStyles, ThemeProvider } from '@mui/styles'

import { MainHeader } from './partials/Header'
import { MainDrawer } from './partials/Drawer'
import { MainContainer } from './partials/MainContainer'

import { SiteRouter } from './router'
import { LoadingComponent } from './partials/Loading'
import { useCurrentUserQuery } from './generated/graphql'
import { cache } from './apollo/cache'
import { CURRENT_USER_CLIENT, IS_LOGGED_IN } from './graphql/graphql'

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		background: '#2d2d2d',
		color: '#f7f7f7',
	},
}))

const theme = createTheme({})

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
	const { data, loading: userLoading } = useCurrentUserQuery()

	useEffect(() => {
		// console.log('USEEFFECT_RUN')
		// console.log('DATA', data)

		if (data && data.current_user) {
			// console.log('AFTER IF')
			cache.writeQuery({
				query: CURRENT_USER_CLIENT,
				data: {
					id: data.current_user.id,
					username: data.current_user.username,
				},
			})
			cache.writeQuery({
				query: IS_LOGGED_IN,
				data: {
					isLoggedIn: true,
				},
			})
		}
	}, [userLoading, data])
	// console.log('CURRENT_USER', data)
	// console.log('Loading', userLoading)

	const [open, setOpen] = React.useState(false)

	const handleDrawer = () => {
		setOpen(!open)
	}

	return userLoading ? (
		<LoadingComponent />
	) : (
		<ThemeProvider theme={theme}>
			<div className={classes.root}>
				<CssBaseline />
				<MainHeader handleDrawer={handleDrawer} open={open} />
				<MainDrawer handleDrawer={handleDrawer} open={open} />
				<MainContainer>
					<Suspense fallback={<LoadingComponent />}>
						<SiteRouter />
					</Suspense>
				</MainContainer>
			</div>
		</ThemeProvider>
	)
}

export default App
