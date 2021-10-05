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
		variables: { name: application_name },
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

	let displaySettingsForm

	if (data && data.find_one_application_by_name) {
		const {
			pre_comment_moderation,
			allow_images_and_videos_on_comments,
			display_comments_when_flagged,
			email_mods_when_comments_flagged,
			links_in_comments,
		} = data.find_one_application_by_name
		displaySettingsForm = (
			<ModeratorSettingsForm
				application_name={application_name}
				pre_comment_moderation={pre_comment_moderation}
				display_comments_when_flagged={display_comments_when_flagged}
				email_mods_when_comments_flagged={email_mods_when_comments_flagged}
				links_in_comments={links_in_comments}
				allow_images_and_videos_on_comments={allow_images_and_videos_on_comments}
			/>
		)
	}

	return loading && data ? (
		<LoadingComponent />
	) : (
		<Grid container spacing={2}>
			<Grid item xs={4}>
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
			</Grid>
			<Grid container justifyContent="center" item xs={8}>
				{displaySettingsForm}
			</Grid>
		</Grid>
	)
}
