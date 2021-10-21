import React from 'react'
import { useFormik } from 'formik'
import { Button, TextField } from '@mui/material'
import * as yup from 'yup'

import { useForgotPasswordMutation } from '../../../../generated/graphql'
import { useErrorAndSuccess } from '../../../../utils/hooks/errorAndSuccessHooks'
import { Alerts } from '../../../../partials/Alerts'

interface IForgotPasswordFormValue {
	email: string
}

const validationSchema = yup.object().shape({
	email: yup.string().required().email(),
})

export const ForgotPasswordContainer = () => {
	const [forgotPassword] = useForgotPasswordMutation()
	const {
		checkError,
		setError,
		setErrorMessage,
		checkSuccess,
		setSuccess,
		setSuccessMessage,
		successMessage,
		errorMessage,
	} = useErrorAndSuccess()

	const formik = useFormik<IForgotPasswordFormValue>({
		initialValues: {
			email: '',
		},
		validationSchema,
		async onSubmit({ email }) {
			try {
				const response = await forgotPassword({
					variables: { forgotPasswordInput: { email } },
				})

				if (response.data?.forgot_password.success) {
					setSuccess(true)
					setSuccessMessage(`Reset link has been sent to ${email}`)
				} else {
					throw new Error('Something went wrong, please try again')
				}
			} catch (error) {
				if (error instanceof Error) {
					setErrorMessage(error.message)
					setError(true)
				}
			}
		},
	})

	return (
		<div>
			<h2>Forgot Password Container</h2>
			<Alerts
				checkError={checkError}
				checkSuccess={checkSuccess}
				errorMessage={errorMessage}
				successMessage={successMessage}
			/>
			<form onSubmit={formik.handleSubmit}>
				<TextField
					autoComplete="off"
					fullWidth
					id="email"
					name="email"
					label="Email"
					type="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
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
		</div>
	)
}
