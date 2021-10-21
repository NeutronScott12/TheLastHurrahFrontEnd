import React, { useState } from 'react'
import Alert from '@mui/material/Alert'
import { useFormik } from 'formik'
import { Button, Container, TextField } from '@mui/material'
import { gql, useMutation } from '@apollo/client'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import { CURRENT_USER_CLIENT, IS_LOGGED_IN } from '../../../../graphql/graphql'
import { cache } from '../../../../apollo/cache'
import { ILoginForm } from '../../utils/types'
import { useLoginUserMutation } from '../../../../generated/graphql'

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
	const [loginMutation] = useLoginUserMutation()
	const navigate = useNavigate()
	const [checkError, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	const formik = useFormik<ILoginForm>({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: async ({ email, password }) => {
			try {
				const response = await loginMutation({
					variables: {
						loginInput: {
							email,
							password,
						},
					},
				})

				if (response.data && response.data.login_user) {
					localStorage.setItem('token', response.data.login_user.token)

					const {
						user: { id, username },
					} = response.data.login_user
					console.log('RESPONSE', id, username)

					// isLoggedInVar(true)
					cache.writeQuery({
						query: CURRENT_USER_CLIENT,
						data: {
							id,
							username,
						},
					})
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
				<Button
					disabled={formik.isSubmitting || formik.dirty === false}
					color="primary"
					variant="contained"
					fullWidth
					type="submit"
				>
					Submit
				</Button>
			</form>
			<br />
			<Link to="/auth/forgot_password">Forgot Password?</Link>
		</Container>
	)
}
