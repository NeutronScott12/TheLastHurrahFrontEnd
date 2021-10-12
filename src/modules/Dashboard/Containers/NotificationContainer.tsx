import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchNotificationByApplicationShortNameQuery } from '../../../generated/graphql'
import { LoadingComponent } from '../../../partials/Loading'
import { IParams } from './AppContainer'

export const DashboardNotificationContainer = () => {
	const { application_short_name } = useParams() as IParams
	const { data, loading } = useFetchNotificationByApplicationShortNameQuery({
		variables: {
			fetchNotificationByApplicationShortNameInput: {
				short_name: application_short_name,
			},
		},
	})

	console.log('DATA', data)
	return loading ? (
		<LoadingComponent />
	) : (
		<div>
			<h2>Dashboard Notifications</h2>
		</div>
	)
}
