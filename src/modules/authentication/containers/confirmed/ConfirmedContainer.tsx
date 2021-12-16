import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Button, Grid } from '@mui/material'
import { useLocation, useNavigate } from 'react-router'
import Alert from '@mui/material/Alert'
import { useConfirmUserMutation } from '../../../../generated/graphql'

export const ConfirmedContainer = () => {
	const search = useLocation().search
	const query = useMemo(() => new URLSearchParams(search), [search])
	const [confirmUser] = useConfirmUserMutation()
	const [showErrorAlert, changeErrorAlert] = useState(false)
	const history = useNavigate()

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

	const resendCode = () => {
		console.log('Resending another code')
		history('/login')
	}

	const sendToLogin = () => {
		history('/login')
	}

	return (
		<Grid style={{ marginTop: '2rem' }} justifyContent="center" alignItems="center" container>
			{!showErrorAlert ? (
				<>
					<Alert severity={'success'}>Your account has been confirmed</Alert>
					<Button onClick={sendToLogin}>Login</Button>
				</>
			) : (
				<>
					<Alert severity={'error'}>An error has occured</Alert>
					<Button onClick={resendCode}>Resend Code</Button>
				</>
			)}
		</Grid>
	)
}
