import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { omit } from 'ramda'

import { LoadingComponent } from '../../../partials/Loading'
import { IParams } from './AppContainer'
// import { useErrorAndSuccess } from '../../../utils/hooks/errorAndSuccessHooks'
import {
	Choice,
	// useBlockUsersFromApplicationMutation,
	useFetchApplicationAuthenticatedUsersQuery,
} from '../../../generated/graphql'
import { UserDataGrid } from '../Views/UserDataGrid'
import { IAuthenticatedUsers } from '../types'

// { key: 'body', name: 'Body', width: '50%', resizable: true },

export const UsersContainer = () => {
	const params = useParams() as unknown
	const { application_short_name } = params as IParams
	// const { checkError, errorMessage } = useErrorAndSuccess()
	const [selected, changeSelected] = useState<ReadonlySet<string>>(() => new Set())
	const [choice, changeChoice] = useState<Choice>(Choice.All)

	const { data, loading } = useFetchApplicationAuthenticatedUsersQuery({
		variables: {
			fetchApplicationByShortNameInput: {
				application_short_name,
			},
			authenticatedUserInput: {
				choice,
				limit: 10,
				skip: 0,
			},
		},
	})

	// const [blockUsers] = useBlockUsersFromApplicationMutation()

	// const onChange = (
	// 	params: GridState,
	// 	event: {
	// 		defaultMuiPrevented?: boolean | undefined
	// 	}
	// ) => {
	// 	// console.log('PARAMS', params)
	// 	// console.log('EVENT', event)

	// 	changeSelected(params.selection)
	// }

	const filterUsers = (choice: Choice) => {
		changeChoice(choice)
	}

	let rows: IAuthenticatedUsers[]

	console.log('DATA', data?.fetch_application_by_short_name.authenticated_users)

	if (data && data.fetch_application_by_short_name) {
		rows = data.fetch_application_by_short_name.authenticated_users.map((data) => {
			return omit(['__typename'], data)
		})
	} else {
		rows = []
	}

	const blockSelected = async () => {
		console.log('SELECTED', selected)
	}

	console.log('CHOICE', choice)

	return loading ? (
		<LoadingComponent />
	) : (
		<UserDataGrid
			filterUsers={filterUsers}
			choice={choice}
			selected={selected}
			rows={rows}
			blockSelected={blockSelected}
			changeSelected={changeSelected}
		/>
	)
}
