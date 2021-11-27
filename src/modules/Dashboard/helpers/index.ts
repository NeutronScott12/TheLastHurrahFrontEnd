import moment from 'moment'

import { IComment, IFormattedRow } from '../types'

export const formattedRows = (comments: IComment[]): IFormattedRow[] => {
	return comments.map((comment) => {
		return {
			body: comment.plain_text_body,
			username: comment.author.username,
			id: comment.id,
			created_at: moment(comment.created_at).format('l'),
		}
	})
}
