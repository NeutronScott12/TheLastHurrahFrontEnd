import React from 'react'
import { Button, Grid, TextField } from '@mui/material'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Category, Language, Theme, useCreateApplicationMutation } from '../../../generated/graphql'
import { useNavigate } from 'react-router'

const validationSchema = yup.object({
	name: yup.string().required('Name is required'),
})

export const AddApplicationContainer = () => {
	const navigate = useNavigate()
	const [createApplication] = useCreateApplicationMutation()

	const formik = useFormik({
		initialValues: {
			name: '',
		},
		validationSchema,
		async onSubmit({ name }) {
			console.log(name)

			try {
				const response = await createApplication({
					variables: {
						createApplicationInput: {
							application_name: name,
							application_short_name: '',
							website_url: '',
							adult_content: false,
							category: Category.Tech,
							language: Language.English,
							theme: Theme.Auto,
							comment_policy_summary: '',
							comment_policy_url: '',
							default_avatar_url: '',
							description: '',
						},
					},
				})

				if (response.data) {
					navigate(`/dashboard/apps/${response.data.create_application.short_name}`)
				}
			} catch (error) {
				console.log(error)
			}
		},
	})

	return (
		<Grid
			direction="column"
			alignItems="center"
			justifyContent="center"
			style={{ maxWidth: '50%', margin: 'auto' }}
		>
			<form onSubmit={formik.handleSubmit}>
				<TextField
					fullWidth
					id="name"
					name="name"
					label="Application Name"
					value={formik.values.name}
					onChange={formik.handleChange}
					error={formik.touched.name && Boolean(formik.errors.name)}
					helperText={formik.touched.name && formik.errors.name}
				/>

				<Button color="primary" variant="contained" fullWidth type="submit">
					Submit
				</Button>
			</form>
		</Grid>
	)
}
