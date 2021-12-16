import { Alert, Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useChangePasswordMutation, useConfirmUserMutation } from '../../../../generated/graphql'
import { changePasswordValidation } from '../../helpers/validation'

interface IChangePasswordFormValues {
	email: string
	password: string
	repeat_password: string
}

export const ChangePasswordContainer = () => {
	const search = useLocation().search
	const query = useMemo(() => new URLSearchParams(search), [search])
	const [confirmUser] = useConfirmUserMutation()
	const [changePasswordMutation] = useChangePasswordMutation()
	const [showErrorAlert, changeErrorAlert] = useState(false)
	const [showErrorMessage, setErrorMessage] = useState('')
	const [isSuccess, changeIsSuccess] = useState(false)
	const history = useNavigate()

	const formik = useFormik<IChangePasswordFormValues>({
		initialValues: {
			email: '',
			password: '',
			repeat_password: '',
		},
		validationSchema: changePasswordValidation,
		async onSubmit({ email, password }) {
			try {
				const response = await changePasswordMutation({
					variables: { changePasswordInput: { email, password } },
				})

				if (response.data?.change_password.success) {
					changeIsSuccess(true)
				}
			} catch (error) {
				if (error instanceof Error) {
					setErrorMessage(error.message)
					changeErrorAlert(true)
				}
			}
		},
	})

	const callFunc = useCallback(async () => {
		const response = await confirmUser({
			variables: {
				token: String(query.get('t')),
			},
		})

		if (response.data?.confirm_user.success === false) {
			changeErrorAlert(true)
		}

		return response
	}, [confirmUser, query])

	useEffect(() => {
		callFunc().then((response) => {
			console.log(response)
		})
	}, [callFunc])

	return (
		<div>
			<h2>Change Password</h2>
			{isSuccess ? (
				<>
					<Alert severity={'success'}>Your password has been succesfully changed</Alert>
					<Button onClick={() => history('/login')}>Login</Button>
				</>
			) : (
				''
			)}

			{showErrorAlert ? (
				<>
					<Alert severity={'error'}>An error has occured, please try again</Alert>
					<Alert severity={'error'}>{showErrorMessage}</Alert>
					<Button onClick={() => changeErrorAlert(false)}>Remove</Button>
				</>
			) : (
				''
			)}

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
				<TextField
					autoComplete="off"
					fullWidth
					id="password"
					name="password"
					label="password"
					type="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>
				<TextField
					autoComplete="off"
					fullWidth
					id="repeat_password"
					name="repeat_password"
					label="Repeat Password"
					type="password"
					value={formik.values.repeat_password}
					onChange={formik.handleChange}
					error={formik.touched.repeat_password && Boolean(formik.errors.repeat_password)}
					helperText={formik.touched.repeat_password && formik.errors.repeat_password}
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
