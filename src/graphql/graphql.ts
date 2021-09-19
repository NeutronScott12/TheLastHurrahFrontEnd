import { gql } from '@apollo/client'

export const CURRENT_USER = gql`
    query CurrentUser {
        current_user {
            id
            email
        }
    }
`

export const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
        isLoggedIn @client
    }
`
