import React from 'react'
import { useParams } from 'react-router-dom'
import { useFindProfileQuery } from '../../generated/graphql'
import { LoadingComponent } from '../../partials/Loading'
import { ProfileLayout } from './layout/ProfileLayout'
import { DashboardHeader } from './views/ProfileHeader'

interface IProfileParams {
	username: string
}

export const ProfileContainer = () => {
	const { username } = useParams() as IProfileParams
	const { loading, data } = useFindProfileQuery({ variables: { findProfileInput: { username } } })

	console.log('DATA', data)

	return loading ? (
		<LoadingComponent />
	) : (
		<div>
			<DashboardHeader />
			{data && data.find_profile ? <ProfileLayout profile={data.find_profile} /> : ''}
		</div>
	)
}
