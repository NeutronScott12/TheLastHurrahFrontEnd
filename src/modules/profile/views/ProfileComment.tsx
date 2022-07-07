import React from 'react'
// import Moment from 'react-moment'
// import { Link } from 'react-router-dom'
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

import { IProfileCommentTypes } from '../types'

interface IProfileComment {
	comments: IProfileCommentTypes[]
}

export const ProfileComments: React.FC<IProfileComment> = ({ comments }) => {
	return (
		<div>
			{comments.map((comment) => {
				return (
					<div>
						<h2>bob</h2>

						{/* <Comment key={comment.id}>
						<Comment.Avatar src={comment.author.avatar.url} />
						<Comment.Content>
							<Comment.Author as="a">
								<Link to={`/${comment.author.username}`}>
									{comment.author.username}
								</Link>
							</Comment.Author>
							<Comment.Metadata>
								<Moment format="DD/MM/YYYY">{comment.created_at}</Moment>
							</Comment.Metadata>
					 		<Comment.Text>{comment.plain_text_body}</Comment.Text>
					 		<Comment.Action>
					 			<ArrowUpwardIcon /> {comment.up_vote.length}
					 		</Comment.Action>
					 	</Comment.Content>
					 </Comment> */}
					</div>
				)
			})}
		</div>
	)
}
