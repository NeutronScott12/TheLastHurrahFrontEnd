import { RouteObject } from 'react-router-dom'
import { ProfileContainer } from '.'
import { LoginContainer } from '../authentication/containers/login/LoginContainer'

interface IProfileRoutes {
	isLoggedIn: boolean
}

export const profileRoutes = ({ isLoggedIn }: IProfileRoutes): RouteObject => {
	return {
		path: ':username/*',
		element: isLoggedIn === false ? <LoginContainer /> : <ProfileContainer />,
		children: [{ path: 'comments' }],
	}
}
