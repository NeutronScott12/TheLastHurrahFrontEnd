import React from 'react'
import { Outlet } from 'react-router-dom'

import UrlBreadcrumbs from '../../../utils/widgets/UrlBreadCrumb'
import { DisplayApps } from '../components/DisplayApps/DisplayApps'
import { DashboardHeader } from '../Views/DashboardHeader'

export const DashboardLayout = () => {
	return (
		<div>
			<DashboardHeader />
			<UrlBreadcrumbs />
			<DisplayApps />
			{/* {/* <Route exact path="/apps" component={DashBoardContainer} /> */}
			{/* <Route path="/apps/:id" component={AppContainer} /> } */}
			<Outlet />
		</div>
	)
}
