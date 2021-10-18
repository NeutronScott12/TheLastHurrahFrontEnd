import React from 'react'
import { Avatar, Card, CardMedia, Typography } from '@mui/material'

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
		<Card>
			<CardMedia component="img" image={profile.user.avatar.url} />
			<Typography>{profile.user.username}</Typography>
			Comments: {data?.fetch_comment_and_vote_count.comment_count}
			Upvotes: {data?.fetch_comment_and_vote_count.vote_count}
		</Card>
	)
}
