import React, { useState } from 'react'
import { Button, Container, TextField } from '@mui/material'
import Alert from '@mui/material/Alert'
import * as yup from 'yup'
import { useFormik } from 'formik'

import { IRegisterForm } from '../utils/types'
import { useRegisterUserMutation } from '../../../generated/graphql'

const validationSchema = yup.object({
	email: yup.string().email('Invalid Email').required('Email is required'),
	password: yup
		.string()
		.min(3, 'Password should be of minimum 3 characters length')
		.required('Password is required'),
	repeat_password: yup.string().test('passwords-match', 'Passwords must match', function (value) {
		return this.parent.password === value
	}),
	username: yup.string().required(),
})

export const RegisterContainer = () => {
	const [registerUser] = useRegisterUserMutation()
	const [alertToggle, changeToggle] = useState(false)
	const [alertEmail, changeEmail] = useState('')

	const formik = useFormik<IRegisterForm>({
		initialValues: {
			email: '',
			password: '',
			username: '',
			repeat_password: '',
		},
		validationSchema: validationSchema,
		onSubmit: async (
			{ email, password, username },
			{ setSubmitting, setFieldError, resetForm }
		) => {
			try {
				await registerUser({
					variables: {
						email,
						password,
						username,
						redirect_url: 'http://localhost:3000/confirmed',
					},
				})

				changeEmail(email)
				changeToggle(true)
				resetForm()
				setSubmitting(true)
			} catch (error) {
				console.clear()
				setFieldError('email', 'Email already in use')
				setSubmitting(false)
			}
		},
	})

	return (
		<Container style={{ marginTop: '1rem' }}>
			{alertToggle ? (
				<Alert severity="success">
					Registration complete, please check {alertEmail} for confirmation
				</Alert>
			) : (
				''
			)}

			<form onSubmit={formik.handleSubmit}>
				<TextField
					fullWidth
					id="email"
					name="email"
					label="Email"
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>
				<TextField
					fullWidth
					id="username"
					name="username"
					label="Username"
					value={formik.values.username}
					onChange={formik.handleChange}
					error={formik.touched.username && Boolean(formik.errors.username)}
					helperText={formik.touched.username && formik.errors.username}
				/>
				<TextField
					fullWidth
					autoComplete="off"
					id="password"
					name="password"
					label="Password"
					type="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>
				<TextField
					fullWidth
					autoComplete="off"
					id="repeat_password"
					name="repeat_password"
					label="repeat_password"
					type="password"
					value={formik.values.repeat_password}
					onChange={formik.handleChange}
					error={formik.touched.repeat_password && Boolean(formik.errors.repeat_password)}
					helperText={formik.touched.repeat_password && formik.errors.repeat_password}
				/>
				<Button
					color="primary"
					variant="contained"
					fullWidth
					type="submit"
					disabled={!formik.isValid && formik.dirty && !formik.isSubmitting}
				>
					Submit
				</Button>
			</form>
		</Container>
	)
}
