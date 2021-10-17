import React from 'react'

import { SideInfoBar } from '../containers/SideInfoBar'
import { IProfile } from '../types'

interface IProfileLayout {
	profile: IProfile
}

export const ProfileLayout: React.FC<IProfileLayout> = ({ profile }) => {
	return (
		<div>
			<h2>Profile Layout</h2>
			<SideInfoBar profile={profile} />
		</div>
	)
}
