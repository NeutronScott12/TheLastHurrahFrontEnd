import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { gql, useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { Alert } from '@material-ui/lab'

import { IS_LOGGED_IN } from '../../../graphql/graphql'
import { cache } from '../../../apollo/cache'
import { Container } from '@material-ui/core'
import { ILoginForm } from '../utils/types'

const LOGIN_MUTATION = gql`
	mutation Login($email: String!, $password: String!) {
		login_user(email: $email, password: $password) {
			token
			refresh_token
			success
			user {
				confirmed
				id
				email
			}
		}
	}
`

const validationSchema = yup.object({
	email: yup.string().email('Enter a valid email').required('Email is required'),
	password: yup
		.string()
		.min(3, 'Password should be of minimum 3 characters length')
		.required('Password is required'),
})

export const LoginContainer = () => {
	const [createUser] = useMutation(LOGIN_MUTATION)
	const navigate = useNavigate()
	const [checkError, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	const formik = useFormik<ILoginForm>({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			try {
				const response = await createUser({
					variables: {
						password: values.password,
						email: values.email,
					},
				})

				if (response.data.login_user) {
					localStorage.setItem('token', response.data.login_user.token)
					// isLoggedInVar(true)

					cache.writeQuery({
						query: IS_LOGGED_IN,
						data: {
							isLoggedIn: true,
						},
					})

					navigate('/dashboard')

					console.log('SHOULD NOT SEE THIS')
				}
			} catch (error: unknown) {
				if (error instanceof Error) {
					setErrorMessage(error.message)
					setError(true)
				}
			}
		},
	})

	return (
		<Container style={{ marginTop: '1rem' }}>
			{checkError ? <Alert severity="error">{errorMessage}</Alert> : ''}
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
					autoComplete="off"
					fullWidth
					id="password"
					name="password"
					label="Password"
					type="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>
				<Button color="primary" variant="contained" fullWidth type="submit">
					Submit
				</Button>
			</form>
		</Container>
	)
}
