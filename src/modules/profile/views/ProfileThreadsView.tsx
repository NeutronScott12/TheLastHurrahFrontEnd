import { Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { IProfileThreadList } from '../types'
import { ProfileComments } from './ProfileComment'

interface IProfileCommentView {
	threads: IProfileThreadList[]
}

export const ProfileThreadsView: React.FC<IProfileCommentView> = ({ threads }) => {
	console.log('THREAD', threads)
	return (
		<div>
			{threads.map((thread) => {
				return (
					<Paper style={{ padding: '1rem' }} key={thread.id} elevation={3}>
						Discussion on <b>{thread.parent_application.application_name}</b> ||{' '}
						{thread.thread_comments.comments_count} comments
						<br />
						<a target="_blank" href={thread.website_url}>
							<h2>{thread.title}</h2>
						</a>
						<ProfileComments comments={thread.thread_comments.comments} />
					</Paper>
				)
			})}
		</div>
	)
}
