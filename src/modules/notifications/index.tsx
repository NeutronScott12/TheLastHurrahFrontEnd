import React, { useEffect } from 'react'
import { useFetchNotificationsByUserIdLazyQuery } from '../../generated/graphql'
import { LoadingComponent } from '../../partials/Loading'
import { useCurrentUserClient } from '../../utils/hooks/customApolloHooks'

export const NotificationContainer = () => {
	const { data: userData } = useCurrentUserClient()
	const [getNotification, { loading, data }] = useFetchNotificationsByUserIdLazyQuery()

	useEffect(() => {
		console.log('DATA', userData)
		if (userData) {
			getNotification({
				variables: {
					fetchNotificationsByUserIdInput: {
						user_id: userData.current_user.id,
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
