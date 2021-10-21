import { RouteObject } from 'react-router-dom'

import { AboutContainer } from '../modules/About/AboutContainer'
import { ConfirmedContainer } from '../modules/authentication/containers/confirmed/ConfirmedContainer'
import { LoginContainer } from '../modules/authentication/containers/login/LoginContainer'
import { RegisterContainer } from '../modules/authentication/containers/register/RegisterContainer'
import { DashboardLayout } from '../modules/Dashboard/Layouts/DashboardLayout'
import { HomeContainer } from '../modules/Home/HomeContainer'

export const generateRoutesList = (loggedIn: boolean): RouteObject[] => {
	return [
		{
			path: '/confirmed',
			element: ConfirmedContainer,
		},
		{
			path: '/register',
			element: RegisterContainer,
		},
		{
			path: '/login',
			element: LoginContainer,
		},
		{
			path: '/about',
			element: AboutContainer,
		},
		{
			path: 'dashboard/*',
			element: DashboardLayout,
		},
		{
			path: '/',
			element: HomeContainer,
		},
	]
}
