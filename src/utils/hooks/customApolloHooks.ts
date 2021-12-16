import { QueryHookOptions, useQuery } from '@apollo/client'
import { CURRENT_USER_CLIENT, IS_LOGGED_IN } from '../../graphql/graphql'
import { ICurrentUser, ILoggedIn } from '../../types'

export const useLoggedIn = (baseOptions?: QueryHookOptions) =>
	useQuery<ILoggedIn>(IS_LOGGED_IN, baseOptions)

export const useCurrentUserClient = (baseOptions?: QueryHookOptions) =>
	useQuery<ICurrentUser>(CURRENT_USER_CLIENT, baseOptions)
