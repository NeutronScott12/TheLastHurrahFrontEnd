import React from 'react'
import { useFormik } from 'formik'
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { useTwoFactorLoginMutation } from '../../../../../generated/graphql'
import { completeLogin } from '../helpers/login.helper'

interface ITwoFactorFormValues {
	two_factor_code: string
}

interface ITwoFactorComponent {
	email: string
}

export const TwoFactorComponent: React.FC<ITwoFactorComponent> = ({ email }) => {
	const [twoFactorLogin] = useTwoFactorLoginMutation()
	const navigate = useNavigate()

	const formik = useFormik<ITwoFactorFormValues>({
		initialValues: {
			two_factor_code: '',
		},
		async onSubmit({ two_factor_code }) {
			console.log(two_factor_code)

			try {
				const response = await twoFactorLogin({
					variables: {
						twoFactorInput: {
							email,
							two_factor_id: two_factor_code.trim(),
						},
					},
				})

				if (!response.data) {
					throw new Error('Something went wrong, please try again')
				}

				const {
					//@ts-ignore
					token,
					//@ts-ignore
					user: { username, id },
				} = response.data.two_factor_login

				const success = completeLogin(token, username, id)

				if (success) {
					navigate('/dashboard')
				} else {
					throw new Error('Login failed, please try again')
				}
			} catch (error) {
				if (error instanceof Error) {
					console.log(error)
					// setError(true)
					// setErrorMessage('something went wrong')
				}
			}
		},
	})

	return (
		<form onSubmit={formik.handleSubmit}>
			<TextField
				autoComplete="off"
				fullWidth
				id="two_factor_code"
				name="two_factor_code"
				label="Enter Code here"
				value={formik.values.two_factor_code}
				onChange={formik.handleChange}
				error={formik.touched.two_factor_code && Boolean(formik.errors.two_factor_code)}
				helperText={formik.touched.two_factor_code && formik.errors.two_factor_code}
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
	)
}
