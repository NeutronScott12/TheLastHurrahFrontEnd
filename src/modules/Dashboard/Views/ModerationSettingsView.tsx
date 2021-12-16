import React from 'react'
import { Button, ListItem, ListItemText, TextField } from '@mui/material'
import { FormikProps } from 'formik'
import { IFormikValues, IModeratorState } from '../Containers/ModeratorContainer/ModeratorContainer'

interface IModerationSettingsView {
	formik: FormikProps<IFormikValues>
	userData: IModeratorState | undefined
	isAddModeratorOpen: boolean
	addModerator: (id: string) => void
}

export const ModerationSettingsForm: React.FC<IModerationSettingsView> = ({
	formik,
	userData,
	isAddModeratorOpen,
	addModerator,
}) => {
	return (
		<div>
			<h2>Moderators</h2>
			<form onSubmit={formik.handleSubmit}>
				<TextField
					autoComplete="off"
					fullWidth
					id="email"
					name="email"
					label="email"
					type="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>
				<Button color="primary" variant="contained" fullWidth type="submit">
					Search Users
				</Button>
			</form>
			{userData && isAddModeratorOpen ? (
				<ListItem style={{ width: '30%' }}>
					<ListItemText primary={userData.username} />
					<Button
						disabled={formik.isSubmitting || formik.dirty === false}
						onClick={() => addModerator(userData.id)}
					>
						Add moderator
					</Button>
				</ListItem>
			) : (
				''
			)}
		</div>
	)
}
