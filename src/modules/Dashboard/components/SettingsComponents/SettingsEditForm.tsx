import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { ApplicationFieldsFragment } from '../../../../generated/graphql'
import { Button, Grid, TextField } from '@mui/material'

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
				<form onSubmit={formik.handleSubmit}>
					<TextField
						autoComplete="off"
						fullWidth
						id="name"
						name="name"
						label="name"
						type="name"
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
		</div>
	)
}
