import React from 'react'
import { List, ListItem, Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import {
	useDeleteNotificationMutation,
	useFetchNotificationByApplicationShortNameQuery,
} from '../../../generated/graphql'
import { LoadingComponent } from '../../../partials/Loading'
import { IParams } from './AppContainer'

export const DashboardNotificationContainer = () => {
	const params = useParams() as unknown
	const { application_short_name } = params as IParams
	const [deleteNotificationMutation] = useDeleteNotificationMutation()
	const { data, loading, refetch } = useFetchNotificationByApplicationShortNameQuery({
		variables: {
			fetchNotificationByApplicationShortNameInput: {
				short_name: application_short_name,
			},
		},
	})

	const deleteNotification = async (id: string) => {
		try {
			await deleteNotificationMutation({
				variables: {
					deleteNotificationInput: {
						id,
					},
				},
			})
			await refetch()
		} catch (error) {
			console.log(error)
		}
	}

	console.log('DATA', data)
	return loading ? (
		<LoadingComponent />
	) : (
		<div>
			<h2>Dashboard Notifications 2</h2>
			<List>
				{data?.fetch_notifications_by_short_name.map((notification) => {
					console.log('notification', notification)
					return (
						<div>
							<ListItem key={notification.id}>{notification.message}</ListItem>
							<Button onClick={() => deleteNotification(notification.id)}>
								Delete
							</Button>
						</div>
					)
				})}
			</List>
		</div>
	)
}
