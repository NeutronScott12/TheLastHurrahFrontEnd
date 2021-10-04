import React, { useState } from 'react'
import { Button, Grid, List, ListItem, ListItemText, TextField } from '@mui/material'
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

interface IModeratorState {
	id: string
	email: string
	username: string
}

export const ModeratorContainer = () => {
	const { application_name } = useParams() as IParams
	const [getUser, { data: userData }] = useSearchUserByEmailLazyQuery()
	const [addUserModerator, setAddModerator] = useState<IModeratorState>()
	const [isAddModeratorOpen, setAddModeratorOpen] = useState(false)
	const { data, loading, refetch } = useFetchApplicationByNameQuery({
		variables: { name: application_name, FetchThreadCommentsById: { limit: 10, skip: 0 } },
	})
	const [removeMod] = useRemoveApplicationModeratorMutation()
	const [addMod] = useAddApplicationModeratorMutation()
	const formik = useFormik({
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
		<div>
			<h2>Moderators</h2>
			<Grid style={{ width: '30%' }}>
				<form onSubmit={formik.handleSubmit}>
					<TextField
						autoComplete="off"
						fullWidth
						id="email"
						name="email"
						label="email"
						type="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						error={formik.touched.email && Boolean(formik.errors.email)}
						helperText={formik.touched.email && formik.errors.email}
					/>
					<Button color="primary" variant="contained" fullWidth type="submit">
						Search Users
					</Button>
				</form>
			</Grid>
			{userData && isAddModeratorOpen ? (
				<Grid>
					<ListItem style={{ width: '30%' }}>
						<ListItemText primary={userData.search_user_by_email.username} />
						<Button onClick={() => addModerator(userData.search_user_by_email.id)}>
							Add moderator
						</Button>
					</ListItem>
				</Grid>
			) : (
				''
			)}
			<Grid>
				<List>
					{data?.find_one_application_by_name.moderators.map((moderator) => {
						return (
							<ListItem style={{ width: '30%' }} key={moderator.id}>
								<ListItemText primary={moderator.username} />
								<Button onClick={() => removeModerator(moderator.id)}>
									Remove moderator
								</Button>
							</ListItem>
						)
					})}
				</List>
			</Grid>
		</div>
	)
}
