import React, { useEffect } from 'react'
import { Sort, useFetchThreadsByUserIdLazyQuery } from '../../../generated/graphql'
import { LoadingComponent } from '../../../partials/Loading'
import { useCurrentUserClient } from '../../../utils/hooks/customApolloHooks'
import { ProfileThreadsView } from '../views/ProfileThreadsView'

export const ProfileCommentList = () => {
	const { data: currentUserData } = useCurrentUserClient()
	const [fetchThreadByUser, { data, loading }] = useFetchThreadsByUserIdLazyQuery()

	useEffect(() => {
		if (currentUserData && currentUserData.current_user) {
			const { id } = currentUserData.current_user
			fetchThreadByUser({
				variables: {
					commentsByUserIdInput: {
						user_id: id,
					},
					fetchThreadCommentsBySort: {
						limit: 10,
						skip: 0,
						sort: Sort.Asc,
					},
					fetchThreadsByUserIdInput: {
						user_id: id,
					},
				},
			})
		}
	}, [currentUserData, fetchThreadByUser])

	console.log(currentUserData)
	console.log('DATA', data)

	return loading && data ? (
		<LoadingComponent />
	) : (
		<div>
			{data && data.fetch_threads_by_user_id ? (
				<ProfileThreadsView threads={data.fetch_threads_by_user_id} />
			) : (
				<></>
			)}
		</div>
	)
}
