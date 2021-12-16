import React from 'react'
import { Link } from 'react-router-dom'
import { Button, TableCell, TableRow, Typography } from '@mui/material'
import Moment from 'react-moment'

import { useFetchApplicationsByOwnerQuery } from '../../../../generated/graphql'
import { TableGenerator } from '../../../../utils/widgets/TableGenerator'
import { LoadingComponent } from '../../../../partials/Loading'

export const DisplayApps = () => {
	const { data, loading } = useFetchApplicationsByOwnerQuery()

	return loading ? (
		<LoadingComponent />
	) : (
		<>
			{data && loading === false ? (
				<Button component={Link} style={{}} to="/dashboard/add_application">
					Add Application
				</Button>
			) : (
				''
			)}

			<TableGenerator
				tableHeaders={[
					{ name: 'App Name', props: {} },
					{ name: 'Start Date', props: { align: 'right' } },
					{ name: 'Renewal', props: { align: 'right' } },
					{ name: 'Cost', props: { align: 'right' } },
					{ name: 'Plan', props: { align: 'right' } },
				]}
			>
				<>
					{data?.fetch_all_applications.map(
						({ id, application_name, cost, plan, created_at, renewal, short_name }) => {
							return (
								<TableRow key={id}>
									<TableCell component="th" scope="row">
										<Typography variant="h4" component="h6">
											<Link
												style={{
													textDecoration: 'none',
													color: 'white',
												}}
												to={`/dashboard/${short_name}`}
												state={{
													application_id: id,
												}}
											>
												{application_name}
											</Link>
										</Typography>
									</TableCell>
									<TableCell align="right">
										<Moment format="YYYY/MM/DD">{created_at}</Moment>
									</TableCell>
									<TableCell align="right">{renewal}</TableCell>
									<TableCell align="right">{cost}</TableCell>
									<TableCell align="right">{plan}</TableCell>
								</TableRow>
							)
						}
					)}
				</>
			</TableGenerator>
		</>
	)
}
