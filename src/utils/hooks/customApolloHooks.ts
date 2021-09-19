import { QueryHookOptions, useQuery } from '@apollo/client'
import { IS_LOGGED_IN } from '../../graphql/graphql'
import { ILoggedIn } from '../../types'

export const useCurrentUser = (baseOptions?: QueryHookOptions) =>
    useQuery<ILoggedIn>(IS_LOGGED_IN, baseOptions)
