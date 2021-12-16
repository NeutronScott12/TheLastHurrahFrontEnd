import { gql } from '@apollo/client'

export const CURRENT_USER_CLIENT = gql`
	query CurrentUser {
		current_user @client {
			id
			username
		}
	}
`

export const IS_LOGGED_IN = gql`
	query IsUserLoggedIn {
		isLoggedIn @client
	}
`
