import React from 'react'
import { useFormik } from 'formik'
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	TextField,
} from '@mui/material'

export const ModeratorSettingsForm = () => {
	const formik = useFormik({
		initialValues: {
			preModeration: '',
			linksInComments: false,
			emailModerators: false,
			doNotDisplay: false,
			imageAndVideos: false,
			daysToClosingComments: 0,
		},
		async onSubmit() {},
	})

	return (
		<div>
			<h2>Moderator Settings</h2>
			<FormControl component="fieldset">
				<FormLabel component="legend">Pre-Moderation</FormLabel>
				<RadioGroup
					onChange={formik.handleChange}
					name={formik.values.preModeration}
					value={formik.values.preModeration}
					aria-label="pre-moderation"
				>
					<FormControlLabel
						control={<Radio />}
						value="none"
						label="None — Comments don't need to be approved before they are published."
					></FormControlLabel>
					<FormControlLabel
						control={<Radio />}
						value="new_comments"
						label="New Commenters — Commenters new to your forum will require approval for"
					></FormControlLabel>
					<FormControlLabel
						control={<Radio />}
						value="all"
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
			</FormControl>
		</div>
	)
}
