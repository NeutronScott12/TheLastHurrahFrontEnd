import React from 'react'

import { Navigate } from 'react-router-dom'
import { Route, RouteProps } from 'react-router-dom'
import { useCurrentUserQuery } from '../generated/graphql'

export const AuthRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
    const { data, loading, error } = useCurrentUserQuery()

    if (!data?.current_user) {
        localStorage.setItem('logged_in', 'false')
        return <Navigate to="/login" />
    }

    if (loading) {
        return <h2>loading...</h2>
    } else if (data?.current_user.id) {
        localStorage.setItem('logged_in', 'true')

        return <Route {...rest}>{children}</Route>
    }

    return <Navigate to="/login" />
}
