import React, { Suspense, useEffect, useState } from 'react'
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

export const ColorModeContext = React.createContext({
	toggleColorMode: () => {},
})

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
	const [mode, setMode] = useState('dark')
	const classes = useStyles()
	const { data, loading: userLoading } = useCurrentUserQuery()

	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
			},
		}),
		[]
	)

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					//@ts-ignore
					mode,
				},
			}),
		[mode]
	)

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
		<ColorModeContext.Provider value={colorMode}>
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
		</ColorModeContext.Provider>
	)
}

export default App
