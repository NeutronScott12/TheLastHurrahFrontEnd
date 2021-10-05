import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
	useAddApplicationModeratorMutation,
	useFetchApplicationByNameQuery,
	useRemoveApplicationModeratorMutation,
	useSearchUserByEmailLazyQuery,
} from '../../../../generated/graphql'
import { LoadingComponent } from '../../../../partials/Loading'
import { IParams } from '../AppContainer'
import { useFormik } from 'formik'
import { ModerationSettingsForm } from '../../Views/ModerationSettingsView'
import { Grid } from '@mui/material'
import { ModeratorList } from '../../Views/ModeratorList'
import { ModeratorSettingsForm } from '../../components/ModeratorComponents/ModeratorSettingsForm'

interface IModeratorState {
	id: string
	email: string
	username: string
}

export interface IFormikValues {
	email: string
}

export const ModeratorContainer = () => {
	const { application_name } = useParams() as IParams
	const [getUser, { data: userData }] = useSearchUserByEmailLazyQuery()
	const [userModerator, setAddModerator] = useState<IModeratorState>()
	const [isAddModeratorOpen, setAddModeratorOpen] = useState(false)
	const { data, loading, refetch } = useFetchApplicationByNameQuery({
		variables: { name: application_name, FetchThreadCommentsById: { limit: 10, skip: 0 } },
	})
	const [removeMod] = useRemoveApplicationModeratorMutation()
	const [addMod] = useAddApplicationModeratorMutation()
	const formik = useFormik<IFormikValues>({
		initialValues: {
			email: '',
		},
		async onSubmit(values, { setSubmitting, resetForm }) {
			console.log(values)
			try {
				getUser({ variables: { email: values.email } })
				if (userData) {
					console.log('WORKING')
					setAddModeratorOpen(true)
					setAddModerator(userData.search_user_by_email)
				}

				setSubmitting(false)
				// resetForm()
			} catch (error) {
				console.log(error)
			}
		},
	})

	const addModerator = async (id: string) => {
		try {
			console.log('DATA', data)
			console.log('USER_DATA', userData)
			if (data && userData) {
				const response = await addMod({
					variables: {
						addModeratorInput: {
							application_id: data.find_one_application_by_name.id,
							moderator_id: id,
						},
					},
				})
				setAddModeratorOpen(false)
				console.log('RESPONSE', response)
			}
		} catch (error) {
			console.log(error)
		}
	}

	const removeModerator = async (moderator_id: string) => {
		try {
			if (data) {
				await removeMod({
					variables: {
						removeModeratorInput: {
							application_id: data.find_one_application_by_name.id,
							moderator_id,
						},
					},
				})

				await refetch()
			}
		} catch (error) {
			console.log(error)
		}
	}

	return loading ? (
		<LoadingComponent />
	) : (
		<Grid>
			<ModerationSettingsForm
				userData={userData}
				formik={formik}
				isAddModeratorOpen={isAddModeratorOpen}
				addModerator={addModerator}
			/>
			<ModeratorList
				moderators={data?.find_one_application_by_name.moderators}
				removeModerator={removeModerator}
			/>
			<ModeratorSettingsForm />
		</Grid>
	)
}
