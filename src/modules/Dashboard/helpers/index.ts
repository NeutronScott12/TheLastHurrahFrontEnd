import moment from 'moment'

import { IComments } from '../types'

// interface IFormattedRowsResponse {
//     body: string,
//     username: string,
//     id: string,
//     created_at: Date
// }

export const formattedRows = (comments: IComments[]): IComments => {
	return comments.reduce(
		// @ts-ignore
		(prev, curr: CommentModel, key) => {
			return [
				...prev,
				{
					body: curr.plain_text_body,
					username: curr.author.username,
					id: curr.id,
					created_at: moment(curr.created_at).format('l'),
				},
			]
		},
		[]
	)
}
