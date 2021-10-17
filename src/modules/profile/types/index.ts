export interface IProfile {
	__typename?: 'ProfileEntity'
	id: string
	user: {
		__typename?: 'UserModel'
		created_at: any
		username: string
		last_active: any
		avatar: {
			__typename?: 'AvatarEntity' | undefined
			url: string
			filename: string
			id: string
		}
	}
}
