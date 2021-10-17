import React from 'react'

interface IProfileLayout {
	profile: {
		__typename?: 'ProfileEntity' | undefined
		id: string
		user:
			| {
					__typename?: 'UserModel' | undefined
					created_at: any
					username: string
					last_active: any
			  }
			| undefined
	}
}

export const ProfileLayout: React.FC<IProfileLayout> = () => {
	return (
		<div>
			<h2>Profile Layout</h2>
		</div>
	)
}
