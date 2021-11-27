import moment from 'moment'
import { reduce } from 'ramda'
import { CommentModel } from '../../../generated/graphql'

import { IComment, IFormattedRow } from '../types'

// interface IFormattedRowsResponse {
//     body: string,
//     username: string,
//     id: string,
//     created_at: Date
// }

export const formattedRows = (comments: IComment[]): IFormattedRow[] => {
	return comments.map((comment) => {
		return {
			body: comment.plain_text_body,
			username: comment.author.username,
			id: comment.id,
			created_at: moment(comment.created_at).format('l'),
		}
	})

	// return reduce(
	// 	(prev, curr) => {
	// 		return [
	// 			...prev,
	// 			{
	// 				body: curr.plain_text_body,
	// 				username: curr.author.username,
	// 				id: curr.id,
	// 				created_at: moment(curr.created_at).format('l'),
	// 			},
	// 		]
	// 	},
	// 	[],
	// 	comments
	// )
}
