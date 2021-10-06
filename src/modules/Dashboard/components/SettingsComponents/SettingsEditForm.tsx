import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
	Alert,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	MenuItem,
	Select,
	TextField,
} from '@mui/material'
import { styled } from '@mui/material/styles'

import {
	ApplicationFieldsFragment,
	Category,
	Language,
	Theme,
	useUpdateApplicationMutation,
} from '../../../../generated/graphql'

interface ISettingsFormProps {
	application: ApplicationFieldsFragment
}

interface ISettingsEditFormValues {
	application_name: string
	default_avatar_url: string | null | undefined
	website_url: string
	description: string | null | undefined
	comment_policy_summary: string | null | undefined
	comment_policy_url: string | null | undefined
	adult_content: boolean
	language: Language
	theme: Theme
	category: Category
}

const validationSchema = Yup.object().shape({
	application_name: Yup.string().required(),
})

const Input = styled('input')({
	display: 'none',
})

export const SettingsEditForm: React.FC<ISettingsFormProps> = ({
	application: {
		application_name,
		adult_content,
		language,
		description,
		default_avatar_url,
		theme,
		category,
		website_url,
		comment_policy_summary,
		comment_policy_url,
		id,
	},
}) => {
	const [checkError, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const [checkSuccess, setSuccess] = useState(false)
	const [successMessage, setSuccessMessage] = useState('')
	const [updateApplication] = useUpdateApplicationMutation()
	const formik = useFormik<ISettingsEditFormValues>({
		initialValues: {
			application_name,
			website_url,
			category,
			comment_policy_url,
			comment_policy_summary,
			description,
			default_avatar_url,
			language,
			adult_content,
			theme,
		},
		validationSchema,
		async onSubmit(values) {
			console.log(values)
			try {
				await updateApplication({
					variables: {
						updateApplicationInput: {
							id,
							...values,
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
		<Grid
			container
			// alignItems="stretch"
			direction="column"
			spacing={2}
		>
			<h2>{application_name} Settings</h2>
			{checkError ? <Alert severity="error">{errorMessage}</Alert> : ''}
			{checkSuccess ? <Alert severity="success">{successMessage}</Alert> : ''}
			<Grid item flexGrow={1} md={6}>
				<form onSubmit={formik.handleSubmit}>
					<FormControl component="fieldset" fullWidth>
						<TextField
							autoComplete="off"
							fullWidth
							id="application_name"
							name="application_name"
							label="Website Name"
							type="application_name"
							value={formik.values.application_name}
							onChange={formik.handleChange}
							error={
								formik.touched.application_name &&
								Boolean(formik.errors.application_name)
							}
							helperText={
								formik.touched.application_name && formik.errors.application_name
							}
						/>
						<TextField
							autoComplete="off"
							fullWidth
							id="website_url"
							name="website_url"
							label="Website URL"
							type="website_url"
							value={formik.values.website_url || ''}
							onChange={formik.handleChange}
							error={formik.touched.website_url && Boolean(formik.errors.website_url)}
							helperText={formik.touched.website_url && formik.errors.website_url}
						/>
						<TextField
							autoComplete="off"
							fullWidth
							id="comment_policy_url"
							name="comment_policy_url"
							label="Comment Policy URL"
							type="comment_policy_url"
							value={formik.values.comment_policy_url || ''}
							onChange={formik.handleChange}
							error={
								formik.touched.comment_policy_url &&
								Boolean(formik.errors.comment_policy_url)
							}
							helperText={
								formik.touched.comment_policy_url &&
								formik.errors.comment_policy_url
							}
						/>
						<FormLabel>Categories</FormLabel>
						<Select
							label="Category"
							id="category"
							name="category"
							fullWidth
							autoComplete="off"
							value={formik.values.category}
							onChange={formik.handleChange}
							error={formik.touched.category && Boolean(formik.errors.category)}
						>
							<MenuItem value="TECH">Tech</MenuItem>
						</Select>

						<FormLabel>Default avatar for commenters</FormLabel>
						<label style={{ margin: '1rem 0' }} htmlFor="default_avatar_url">
							<Input
								accept="image/*"
								id="default_avatar_url"
								name="default_avatar_url"
								multiple
								type="file"
								value={default_avatar_url || ''}
								onChange={formik.handleChange}
							/>
							<Button variant="contained" component="span">
								Upload
							</Button>
						</label>

						<TextField
							autoComplete="off"
							fullWidth
							multiline
							id="description"
							name="description"
							label="Description"
							type="description"
							value={formik.values.description || ''}
							onChange={formik.handleChange}
							error={formik.touched.description && Boolean(formik.errors.description)}
							helperText={formik.touched.description && formik.errors.description}
						/>
						<FormControl>
							<FormLabel>Language</FormLabel>
							<Select
								label="Language"
								id="language"
								name="language"
								fullWidth
								autoComplete="off"
								value={formik.values.language}
								onChange={formik.handleChange}
								error={formik.touched.language && Boolean(formik.errors.language)}
							>
								<MenuItem value="ENGLISH">English</MenuItem>
							</Select>
						</FormControl>
						<FormControlLabel
							label="Adult Content"
							control={
								<Checkbox
									checked={formik.values.adult_content}
									onChange={formik.handleChange}
									name="adult_content"
								/>
							}
						></FormControlLabel>
						<FormControl>
							<FormLabel>Theme</FormLabel>

							<Select
								label="Theme"
								id="theme"
								name="theme"
								fullWidth
								autoComplete="off"
								value={formik.values.theme}
								onChange={formik.handleChange}
								error={formik.touched.theme && Boolean(formik.errors.theme)}
							>
								<MenuItem value="AUTO">Auto</MenuItem>
								<MenuItem value="DARK">Dark</MenuItem>
								<MenuItem value="LIGHT">Light</MenuItem>
							</Select>
						</FormControl>

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
			</Grid>
		</Grid>
	)
}
