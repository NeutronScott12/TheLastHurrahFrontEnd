import React, { useState } from 'react'
import { useFormik } from 'formik'
import {
	Alert,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	TextField,
} from '@mui/material'
import {
	Pre_Comment_Moderation,
	useUpdateApplicationCommentRulesMutation,
} from '../../../../generated/graphql'

interface IModeratorSettingsForm {
	application_name: string
	pre_comment_moderation: Pre_Comment_Moderation
	links_in_comments: boolean
	email_mods_when_comments_flagged: boolean
	display_comments_when_flagged: boolean
	allow_images_and_videos_on_comments: boolean
}

export const ModeratorSettingsForm: React.FC<IModeratorSettingsForm> = ({
	application_name,
	pre_comment_moderation,
	links_in_comments,
	email_mods_when_comments_flagged,
	display_comments_when_flagged,
	allow_images_and_videos_on_comments,
}) => {
	const [checkError, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const [checkSuccess, setSuccess] = useState(false)
	const [successMessage, setSuccessMessage] = useState('')
	const [updateCommentRules] = useUpdateApplicationCommentRulesMutation()

	const formik = useFormik({
		initialValues: {
			preModeration: pre_comment_moderation,
			linksInComments: links_in_comments,
			emailModerators: email_mods_when_comments_flagged,
			doNotDisplay: display_comments_when_flagged,
			imageAndVideos: allow_images_and_videos_on_comments,
			daysToClosingComments: 0,
		},
		async onSubmit({
			preModeration,
			linksInComments,
			emailModerators,
			doNotDisplay,
			imageAndVideos,
		}) {
			try {
				await updateCommentRules({
					variables: {
						updateApplicationCommentRulesInput: {
							application_name,
							pre_comment_moderation: preModeration,
							links_in_comments: linksInComments,
							email_mods_when_comments_flagged: emailModerators,
							display_comments_when_flagged: doNotDisplay,
							allow_images_and_videos_on_comments: imageAndVideos,
						},
					},
				})
				setSuccessMessage('Settings successfully updated')
				setSuccess(true)
			} catch (error) {
				if (error instanceof Error) {
					setErrorMessage(error.message)
					setError(true)
				}
			}
		},
	})

	return (
		<div>
			<h2>Moderator Settings</h2>
			{checkError ? <Alert severity="error">{errorMessage}</Alert> : ''}
			{checkSuccess ? <Alert severity="success">{successMessage}</Alert> : ''}
			<form onSubmit={formik.handleSubmit}>
				<FormControl component="fieldset">
					<FormLabel component="legend">Pre-Moderation</FormLabel>
					<RadioGroup
						aria-label="pre-moderation"
						defaultValue={pre_comment_moderation}
						name="preModeration"
					>
						<FormControlLabel
							control={
								<Radio
									onChange={formik.handleChange}
									name="preModeration"
									value="NONE"
									id="none"
								/>
							}
							label="None — Comments don't need to be approved before they are published."
						></FormControlLabel>
						<FormControlLabel
							control={
								<Radio
									onChange={formik.handleChange}
									name="preModeration"
									value="NEW_COMMENTS"
								/>
							}
							label="New Commenters — Commenters new to your forum will require approval for"
						></FormControlLabel>
						<FormControlLabel
							control={
								<Radio
									onChange={formik.handleChange}
									name="preModeration"
									value="ALL"
								/>
							}
							label="All — Moderators must approve all comments."
						></FormControlLabel>
					</RadioGroup>
					<FormLabel component="legend">Links in comments</FormLabel>
					<FormControlLabel
						label="Comments containing links must be approved before they are published."
						control={
							<Checkbox
								checked={formik.values.linksInComments}
								onChange={formik.handleChange}
								name="linksInComments"
							/>
						}
					></FormControlLabel>
					<FormLabel component="legend">Flagged Comments</FormLabel>
					<FormControlLabel
						label="Email moderators when a post is flagged."
						control={
							<Checkbox
								checked={formik.values.emailModerators}
								onChange={formik.handleChange}
								name="emailModerators"
							/>
						}
					></FormControlLabel>
					<FormControlLabel
						label="Do not display a comment once it is flagged"
						control={
							<Checkbox
								checked={formik.values.doNotDisplay}
								onChange={formik.handleChange}
								name="doNotDisplay"
							/>
						}
					></FormControlLabel>
					<FormLabel component="legend">Images &amp; Videos</FormLabel>
					<FormControlLabel
						label="Allow comments with images and videos"
						control={
							<Checkbox
								checked={formik.values.imageAndVideos}
								onChange={formik.handleChange}
								name="imageAndVideos"
							/>
						}
					></FormControlLabel>
					<FormLabel component="legend">
						Automatic Closing : days. Using 0 days will disable this feature.
					</FormLabel>
					<TextField
						id="outlined-number"
						label="Days"
						type="number"
						onChange={formik.handleChange}
						value={formik.values.daysToClosingComments}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<Button
						disabled={formik.isSubmitting || formik.dirty === false}
						color="primary"
						variant="contained"
						fullWidth
						type="submit"
					>
						Submit
					</Button>
				</FormControl>
			</form>
		</div>
	)
}
