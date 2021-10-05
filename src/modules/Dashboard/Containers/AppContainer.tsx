import React from 'react'
import { Button } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { useFetchApplicationByNameQuery } from '../../../generated/graphql'
import { LoadingComponent } from '../../../partials/Loading'
export interface IParams {
	application_name: string
}

export const AppContainer = () => {
	const { application_name } = useParams() as IParams

	const { loading, data } = useFetchApplicationByNameQuery({
		variables: {
			name: application_name,
		},
	})

	return loading ? (
		<LoadingComponent />
	) : (
		<div>
			<h2>AppContainer: {application_name}</h2>
			<Button component={Link} style={{}} to={`/dashboard/apps/${application_name}/settings`}>
				Settings
			</Button>
			<Button
				component={Link}
				style={{}}
				to={`/dashboard/apps/${application_name}/moderation`}
			>
				Moderation
			</Button>
			<br />
			<Link
				state={{ application_id: data && data.find_one_application_by_name.id }}
				to={`/dashboard/apps/${application_name}/comments`}
			>
				Comments
			</Link>
			<br />
			<Link to={`/dashboard/apps/${application_name}/users`}>Users</Link>
			{/* <Outlet /> */}
		</div>
	)
}
