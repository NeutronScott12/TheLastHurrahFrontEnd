import { cache } from '../../../../../apollo/cache'
import { CURRENT_USER_CLIENT, IS_LOGGED_IN } from '../../../../../graphql/graphql'

export const completeLogin = (token: string, id: string, username: string): boolean => {
	localStorage.setItem('token', token)

	if (!token) {
		console.error('No token given')
		return false
	}

	console.log('RESPONSE', id, username)

	if (!id || !username) {
		console.log('User Credentials not available')
		return false
	}

	// isLoggedInVar(true)
	cache.writeQuery({
		query: CURRENT_USER_CLIENT,
		data: {
			id,
			username,
		},
	})
	cache.writeQuery({
		query: IS_LOGGED_IN,
		data: {
			isLoggedIn: true,
		},
	})

	return true
}
