import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
	useAddApplicationModeratorMutation,
	useFetchApplicationByShortNameQuery,
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

export interface IModeratorState {
	id: string
	email: string
	username: string
}

export interface IFormikValues {
	email: string
}

export const ModeratorContainer = () => {
	const params = useParams() as unknown
	const { application_short_name } = params as IParams
	const [getUser, { data: userData }] = useSearchUserByEmailLazyQuery()
	const [userModerator, setAddModerator] = useState<IModeratorState>()
	const [isAddModeratorOpen, setAddModeratorOpen] = useState(false)
	const { data, loading, refetch } = useFetchApplicationByShortNameQuery({
		variables: { fetchApplicationByShortNameInput: { application_short_name } },
	})
	const [removeMod] = useRemoveApplicationModeratorMutation()
	const [addMod] = useAddApplicationModeratorMutation()
	const formik = useFormik<IFormikValues>({
		initialValues: {
			email: '',
		},
		onSubmit(values, { setSubmitting }) {
			try {
				getUser({ variables: { email: values.email } })
				if (userData) {
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
			if (data && userData) {
				await addMod({
					variables: {
						addModeratorInput: {
							application_id: data.fetch_application_by_short_name.id,
							moderator_id: id,
						},
					},
				})
				setAddModeratorOpen(false)
				formik.resetForm()
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
							application_id: data.fetch_application_by_short_name.id,
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

	if (data && data.fetch_application_by_short_name) {
		const {
			pre_comment_moderation,
			allow_images_and_videos_on_comments,
			display_comments_when_flagged,
			email_mods_when_comments_flagged,
			links_in_comments,
		} = data.fetch_application_by_short_name
		displaySettingsForm = (
			<ModeratorSettingsForm
				application_short_name={application_short_name}
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
		<Grid container spacing={2} columns={{ xs: 12, sm: 8, md: 12 }}>
			<Grid item xs={12} sm={4} md={6}>
				<ModerationSettingsForm
					userData={userModerator}
					formik={formik}
					isAddModeratorOpen={isAddModeratorOpen}
					addModerator={addModerator}
				/>
				<ModeratorList
					moderators={data?.fetch_application_by_short_name.moderators}
					removeModerator={removeModerator}
				/>
			</Grid>
			<Grid container justifyContent="center" item xs={12} sm={4} md={6}>
				{displaySettingsForm}
			</Grid>
		</Grid>
	)
}
