import React, { useState } from 'react'
import Alert from '@mui/material/Alert'
import { useFormik } from 'formik'
import { Button, Container, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import { ILoginForm } from '../../../utils/types'
import { useLoginUserMutation } from '../../../../../generated/graphql'
import { TwoFactorComponent } from '../components/TwoFactorComponent'
import { completeLogin } from '../helpers/login.helper'

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
	const [twoFactor, setTwoFactor] = useState(false)
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

				console.log(response)

				if (response.data && response.data.login_user.two_factor_authentication) {
					setTwoFactor(true)
				} else if (response.data && response.data.login_user) {
					const {
						//@ts-ignore
						token,
						//@ts-ignore
						user: { username, id },
					} = response.data

					const success = completeLogin(token, username, id)

					if (success) {
						navigate('/dashboard')
					} else {
						throw new Error('Login failed, please try again')
					}

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
			{twoFactor ? (
				<TwoFactorComponent email={formik.values.email} />
			) : (
				<>
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
				</>
			)}
		</Container>
	)
}
