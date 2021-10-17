import React from 'react'
import { Avatar } from '@mui/material'

import { IProfile } from '../types'
import { useFetchCommentAndVoteCountQuery } from '../../../generated/graphql'
import { LoadingComponent } from '../../../partials/Loading'

interface ISideInfoBar {
	profile: IProfile
}

export const SideInfoBar: React.FC<ISideInfoBar> = ({ profile }) => {
	const { data, loading } = useFetchCommentAndVoteCountQuery({
		variables: {
			fetchCommentAndVoteCountInput: {
				user_id: profile.id,
			},
		},
	})

	console.log('DATA', data)

	return loading ? (
		<LoadingComponent />
	) : (
		<div>
			<h2>Side Info Bar</h2>
			<Avatar
				alt="profile picture"
				src={profile.user.avatar.url}
				sx={{ width: 200, height: 200 }}
			/>
			{profile.user.username}
			<br />
			comment count: {data?.fetch_comment_and_vote_count.comment_count}
			<br />
			vote count: {data?.fetch_comment_and_vote_count.vote_count}
		</div>
	)
}
