import React from 'react'
import { Alert } from '@mui/material'

interface IAlert {
	checkError?: boolean
	checkSuccess?: boolean
	errorMessage?: string
	successMessage?: string
}

export const Alerts: React.FC<IAlert> = ({
	checkError,
	checkSuccess,
	errorMessage,
	successMessage,
}) => {
	return (
		<>
			{checkError ? <Alert severity="error">{errorMessage}</Alert> : ''}
			{checkSuccess ? <Alert severity="success">{successMessage}</Alert> : ''}
		</>
	)
}
