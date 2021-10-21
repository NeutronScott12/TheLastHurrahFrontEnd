import React from 'react'
import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useFindProfileQuery } from '../../generated/graphql'
import { LoadingComponent } from '../../partials/Loading'
import { ProfileLayout } from './layout/ProfileLayout'
import { ProfileHeader } from './views/ProfileHeader'

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
			<ProfileHeader />
			<Grid style={{ marginTop: '2rem' }}>
				{data && data.find_profile ? <ProfileLayout profile={data.find_profile} /> : ''}
			</Grid>
		</div>
	)
}
