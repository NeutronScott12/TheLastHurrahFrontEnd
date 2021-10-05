import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { ApplicationFieldsFragment } from '../../../../generated/graphql'
import { Button, FormControl, Grid, MenuItem, Select, TextField } from '@mui/material'

interface ISettingsFormProps {
	application: ApplicationFieldsFragment
}

const validationSchema = Yup.object().shape({
	name: Yup.string().required(),
})

export const SettingsEditForm: React.FC<ISettingsFormProps> = ({
	application: { application_name },
}) => {
	const formik = useFormik({
		initialValues: {
			name: application_name,
			moderator: '',
			website_url: '',
			category: '',
			comment_policy_url: '',
			description: '',
		},
		validationSchema,
		async onSubmit(values) {
			console.log(values)
		},
	})

	return (
		<div>
			<h2>{application_name} Settings</h2>
			<Grid style={{ maxWidth: '50%', margin: 'auto' }}>
				<FormControl>
					<form onSubmit={formik.handleSubmit}>
						<TextField
							autoComplete="off"
							fullWidth
							id="name"
							name="name"
							label="Website Name"
							type="name"
							value={formik.values.name}
							onChange={formik.handleChange}
							error={formik.touched.name && Boolean(formik.errors.name)}
							helperText={formik.touched.name && formik.errors.name}
						/>
						<TextField
							autoComplete="off"
							fullWidth
							id="website_url"
							name="website_url"
							label="Website URL"
							type="website_url"
							value={formik.values.website_url}
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
							value={formik.values.comment_policy_url}
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
						<Select
							label="Category"
							id="category"
							name="category"
							fullWidth
							autoComplete="off"
							value={formik.values.category}
							onChange={formik.handleChange}
							error={formik.touched.name && Boolean(formik.errors.name)}
						>
							<MenuItem value="tech">Tech</MenuItem>
						</Select>
						<TextField
							autoComplete="off"
							fullWidth
							multiline
							id="description"
							name="description"
							label="Description"
							type="description"
							value={formik.values.description}
							onChange={formik.handleChange}
							error={formik.touched.description && Boolean(formik.errors.description)}
							helperText={formik.touched.description && formik.errors.description}
						/>
						<Button color="primary" variant="contained" fullWidth type="submit">
							Submit
						</Button>
					</form>
				</FormControl>
			</Grid>
		</div>
	)
}
