import { CountModel, Maybe } from '../../../generated/graphql'

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

export interface IProfileCommentTypes {
	__typename?: 'CommentModel'
	thread_id: string
	created_at: any
	id: string
	plain_text_body: string
	application_id: string
	_count: { __typename?: 'CountModel'; down_vote: number; up_vote: number }
	author: {
		__typename?: 'UserModel'
		username: string
		id: string
		avatar: { __typename?: 'AvatarEntity'; url: string }
	}
	up_vote: Array<{ __typename?: 'RatingModel'; author_id: string; id: string }>
	replies: Array<{
		__typename?: 'CommentModel'
		id: string
		plain_text_body: string
		_count: { __typename?: 'CountModel'; down_vote: number }
	}>
}

export interface IProfileThreadList {
	__typename?: 'ThreadModel'
	application_id: string
	id: string
	commenters_ids: Array<string>
	website_url: string
	title: string
	parent_application: {
		__typename?: 'ApplicationModel'
		id: string
		application_name: string
	}
	thread_comments: {
		__typename?: 'FetchCommentByThreadIdResponse'
		comments_count: number
		comments: Array<IProfileCommentTypes>
	}
}
