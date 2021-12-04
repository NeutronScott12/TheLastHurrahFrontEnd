import React from 'react'
import { Card, CardMedia, Typography } from '@mui/material'

import { IProfile } from '../types'

interface ISideInfoBar {
	profile: IProfile
}

export const SideInfoBar: React.FC<ISideInfoBar> = ({ profile }) => {
	return (
		<Card>
			<CardMedia component="img" image={profile.user.avatar.url} />
			<Typography>{profile.user.username}</Typography>
			<Typography>Joined {profile.user.created_at}</Typography>
		</Card>
	)
}
