import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

import { useCurrentUserClient, useLoggedIn } from '../utils/hooks/customApolloHooks'

import { AboutContainer } from '../modules/About/AboutContainer'
import { ConfirmedContainer } from '../modules/authentication/confirmed/ConfirmedContainer'
import { LoginContainer } from '../modules/authentication/login/LoginContainer'
import { RegisterContainer } from '../modules/authentication/register/RegisterContainer'
import { AddApplicationContainer } from '../modules/Dashboard/Containers/AddApplicationContainer'
import { AppContainer } from '../modules/Dashboard/Containers/AppContainer'
import { CommentContainer } from '../modules/Dashboard/Containers/CommentContainer'
import { AccountContainer } from '../modules/Dashboard/Containers/DashboardContainer'
import { ModeratorContainer } from '../modules/Dashboard/Containers/ModeratorContainer/ModeratorContainer'
import { SettingApplicationContainer } from '../modules/Dashboard/Containers/SettingsContainer/SettingApplicationContainer'
import { UsersContainer } from '../modules/Dashboard/Containers/UsersContainer'
import { DashboardLayout } from '../modules/Dashboard/Layouts/DashboardLayout'
import { HomeContainer } from '../modules/Home/HomeContainer'

const LazyDashboard = lazy(() =>
	import('../modules/Dashboard/Layouts/DashboardLayout').then((module) => ({
		default: module.DashboardLayout,
	}))
)

const LazyNotification = lazy(() =>
	import('../modules/notifications').then((module) => ({ default: module.NotificationContainer }))
)

export const SiteRouter = () => {
	const { data: userData } = useCurrentUserClient()
	const { data } = useLoggedIn()

	const routes = useRoutes([
		{
			path: '/confirmed',
			element: <ConfirmedContainer />,
		},
		{
			path: '/register',
			element:
				data && data.isLoggedIn === false ? <RegisterContainer /> : <DashboardLayout />,
		},
		{
			path: '/login',
			element: data && data.isLoggedIn ? <LoginContainer /> : <DashboardLayout />,
		},
		{
			path: '/about',
			element: <AboutContainer />,
		},
		{
			path: '/notifications',
			element: data && data.isLoggedIn ? <LazyNotification /> : <LoginContainer />,
		},
		{
			path: 'dashboard/*',
			element: data && data.isLoggedIn ? <LazyDashboard /> : <LoginContainer />,
			children: [
				{
					path: 'apps/add_application',
					element: <AddApplicationContainer />,
				},
				{
					path: 'apps',
					element: <AccountContainer />,
				},
				{
					path: 'apps/:application_name',
					element: <AppContainer />,
				},
				{
					path: 'apps/:application_name/comments',
					element: <CommentContainer />,
				},
				{
					path: 'apps/:application_name/users',
					element: <UsersContainer />,
				},
				{
					path: 'apps/:application_name/settings',
					element: <SettingApplicationContainer />,
				},
				{
					path: 'apps/:application_name/moderation',
					element: <ModeratorContainer />,
				},
			],
		},
		{
			path: '/',
			element: <HomeContainer />,
		},
	])

	return routes
}
