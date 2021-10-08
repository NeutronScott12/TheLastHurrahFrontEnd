import React, { lazy, Suspense } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import {
	ApplicationFieldsFragment,
	Category,
	Language,
	Theme,
	useUpdateApplicationMutation,
} from '../../../../generated/graphql'
import { useErrorAndSuccess } from '../../../../utils/hooks/errorAndSuccessHooks'
import { LoadingComponent } from '../../../../partials/Loading'

const LazySettingsEditForm = lazy(() =>
	import('../../Views/SettingsEditForm').then((module) => ({
		default: module.SettingsEditForm,
	}))
)
interface ISettingsFormProps {
	application: ApplicationFieldsFragment
}

export interface ISettingsEditFormValues {
	application_name: string
	default_avatar_url: string | null | undefined
	website_url: string | null | undefined
	description: string | null | undefined
	comment_policy_summary: string | null | undefined
	comment_policy_url: string | null | undefined
	adult_content: boolean
	language: Language
	theme: Theme
	category: Category
}

const validationSchema = Yup.object().shape({
	application_name: Yup.string().required(),
})

export const SettingsEditFormComponent: React.FC<ISettingsFormProps> = ({
	application: {
		application_name,
		adult_content,
		language,
		description,
		default_avatar_url,
		theme,
		category,
		website_url,
		comment_policy_summary,
		comment_policy_url,
		id,
	},
}) => {
	const {
		checkError,
		checkSuccess,
		errorMessage,
		setError,
		setErrorMessage,
		setSuccess,
		setSuccessMessage,
		successMessage,
	} = useErrorAndSuccess()
	const [updateApplication] = useUpdateApplicationMutation()
	const formik = useFormik<ISettingsEditFormValues>({
		initialValues: {
			application_name,
			website_url,
			category,
			comment_policy_url,
			comment_policy_summary,
			description,
			default_avatar_url,
			language,
			adult_content,
			theme,
		},
		validationSchema,
		async onSubmit(values) {
			console.log(values)
			try {
				await updateApplication({
					variables: {
						updateApplicationInput: {
							id,
							...values,
						},
					},
				})
				setSuccessMessage('Settings successfully updated')
				setSuccess(true)
			} catch (error) {
				if (error instanceof Error) {
					setErrorMessage(error.message)
					setError(true)
				}
			}
		},
	})
	return (
		<Suspense fallback={<LoadingComponent />}>
			<LazySettingsEditForm
				formik={formik}
				checkError={checkError}
				checkSuccess={checkSuccess}
				errorMessage={errorMessage}
				successMessage={successMessage}
			/>
		</Suspense>
	)
}
