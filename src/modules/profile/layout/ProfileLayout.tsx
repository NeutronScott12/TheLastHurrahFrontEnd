import { Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

import { SideInfoBar } from '../containers/SideInfoBar'
import { IProfile } from '../types'

interface IProfileLayout {
	profile: IProfile
}

export const ProfileLayout: React.FC<IProfileLayout> = ({ profile }) => {
	return (
		<Grid container spacing={2} columns={{ xs: 12, sm: 8, md: 12 }}>
			<Grid item xs={12} sm={4} md={2}>
				<SideInfoBar profile={profile} />
			</Grid>
			<Grid justifyContent="center" justifyItems="center" item xs={8}>
				<Outlet />
			</Grid>
		</Grid>
	)
}
