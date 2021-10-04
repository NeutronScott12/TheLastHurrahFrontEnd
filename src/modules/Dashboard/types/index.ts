export interface IComments {
	__typename?: 'CommentModel' | undefined
	id: string
	plain_text_body: string
	application_id: string
	author: { __typename?: 'UserModel' | undefined; id: string; username: string }
}
