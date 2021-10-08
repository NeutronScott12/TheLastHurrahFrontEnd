import React from 'react'
import { Navigate, useParams } from 'react-router-dom'

import { LoadingComponent } from '../../../../partials/Loading'
import { IParams } from '../AppContainer'
import { useFetchApplicationByNameQuery } from '../../../../generated/graphql'
import { SettingsEditFormComponent } from '../../components/SettingsComponents/SettingsEditForm'

export const SettingApplicationContainer = () => {
	const { application_name } = useParams() as IParams
	const { data, loading } = useFetchApplicationByNameQuery({
		variables: { name: application_name },
	})

	if (!loading && data) {
		return <SettingsEditFormComponent application={data.find_one_application_by_name} />
	} else if (loading) {
		return <LoadingComponent />
	} else {
		return <Navigate to="/dashboard" />
	}
}
