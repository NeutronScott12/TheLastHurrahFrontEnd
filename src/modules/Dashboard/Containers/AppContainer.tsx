import React from 'react'
import { Button } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { useFetchApplicationByShortNameQuery } from '../../../generated/graphql'
import { LoadingComponent } from '../../../partials/Loading'
export interface IParams {
	application_short_name: string
}

export const AppContainer = () => {
	const params = useParams() as unknown

	const { application_short_name } = params as IParams

	const { loading, data } = useFetchApplicationByShortNameQuery({
		variables: {
			fetchApplicationByShortNameInput: {
				application_short_name,
			},
		},
	})

	return loading ? (
		<LoadingComponent />
	) : (
		<div>
			<h2>AppContainer: {application_short_name}</h2>
			<h2>App ID: {data?.fetch_application_by_short_name.id}</h2>
			<h2>API Secret: {data?.fetch_application_by_short_name.auth_secret}</h2>
			<Button
				component={Link}
				style={{}}
				to={`/dashboard/${application_short_name}/settings`}
			>
				Settings
			</Button>
			<Button
				component={Link}
				style={{}}
				to={`/dashboard/${application_short_name}/moderation`}
			>
				Moderation
			</Button>
			<Button
				component={Link}
				style={{}}
				to={`/dashboard/${application_short_name}/notifications`}
			>
				Notifications
			</Button>
			<Button
				component={Link}
				style={{}}
				to={`/dashboard/${application_short_name}/subscriptions`}
			>
				Subscription
			</Button>
			<br />
			<Link
				state={{ application_id: data && data.fetch_application_by_short_name.id }}
				to={`/dashboard/${application_short_name}/comments`}
			>
				Comments
			</Link>
			<br />
			<Link to={`/dashboard/${application_short_name}/users`}>Users</Link>
			{/* <Outlet /> */}
		</div>
	)
}
