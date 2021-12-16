export interface IComment {
	__typename?: 'CommentModel' | undefined
	id: string
	plain_text_body: string
	application_id: string
	author: { __typename?: 'UserModel' | undefined; id: string; username: string }
	created_at: string
}

export interface IFormattedRow {
	id: string
	body: string
	username: string
	created_at: string
}

export interface IAuthenticatedUsers {
	confirmed: boolean
	last_active: Date
	username: string
	id: string
	created_at: Date
}
