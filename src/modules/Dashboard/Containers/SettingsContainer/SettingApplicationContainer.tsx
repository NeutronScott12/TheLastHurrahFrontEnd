import React from 'react'
import { Navigate, useParams } from 'react-router-dom'

import { LoadingComponent } from '../../../../partials/Loading'
import { IParams } from '../AppContainer'
import { useFetchApplicationByShortNameQuery } from '../../../../generated/graphql'
import { SettingsEditFormComponent } from '../../components/SettingsComponents/SettingsEditForm'

export const SettingApplicationContainer = () => {
	const params = useParams() as unknown
	const { application_short_name } = params as IParams
	const { data, loading } = useFetchApplicationByShortNameQuery({
		variables: { fetchApplicationByShortNameInput: { application_short_name } },
	})

	if (!loading && data) {
		return <SettingsEditFormComponent application={data.fetch_application_by_short_name} />
	} else if (loading) {
		return <LoadingComponent />
	} else {
		return <Navigate to="/dashboard" />
	}
}
