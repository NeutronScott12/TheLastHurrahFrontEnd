import { Button, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

interface IModeratorList {
	moderators:
		| {
				__typename?: 'UserModel' | undefined
				email: string
				username: string
				id: string
		  }[]
		| undefined
	removeModerator: (id: string) => void
}

export const ModeratorList: React.FC<IModeratorList> = ({ moderators, removeModerator }) => {
	return (
		<List>
			{moderators &&
				moderators.map((moderator) => {
					return (
						<ListItem key={moderator.id}>
							<ListItemText primary={moderator.username} />
							<Button onClick={() => removeModerator(moderator.id)}>
								Remove moderator
							</Button>
						</ListItem>
					)
				})}
		</List>
	)
}
