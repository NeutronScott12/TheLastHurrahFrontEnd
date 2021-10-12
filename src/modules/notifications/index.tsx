import React, { useEffect } from 'react'
import { useFetchNotificationByApplicationIdLazyQuery } from '../../generated/graphql'
import { LoadingComponent } from '../../partials/Loading'
import { useCurrentUserClient } from '../../utils/hooks/customApolloHooks'

interface INotificationContainer {
	application_id: string
}

export const NotificationContainer: React.FC<INotificationContainer> = ({ application_id }) => {
	const { data: userData } = useCurrentUserClient()
	const [getNotification, { loading, data }] = useFetchNotificationByApplicationIdLazyQuery()

	useEffect(() => {
		console.log('DATA', userData)
		if (userData) {
			getNotification({
				variables: {
					fetchNotificationsByApplicationIdInput: {
						application_id,
					},
				},
			})
		}
	}, [])

	console.log('DATA', data)

	return loading ? (
		<LoadingComponent />
	) : (
		<div>
			<h2>Notification Container</h2>
		</div>
	)
}
