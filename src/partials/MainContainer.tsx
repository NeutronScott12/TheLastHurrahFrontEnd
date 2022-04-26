import { Container, Grid, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme: Theme) => ({
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	},
	container: {
		color: 'white',
		// background: 'blue',
		marginTop: theme.spacing(6),
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(4),
		paddingLeft: theme.spacing(2),
	},
}))

type Props = {
	children?: React.ReactNode
}

export const MainContainer: React.FC<Props> = (props) => {
	const classes = useStyles()

	return (
		<main className={classes.content}>
			<div className={classes.appBarSpacer}>
				<Container maxWidth="xl" className={classes.container}>
					<Grid>
						<div
						// style={{
						//     paddingTop: '10rem',
						//     background: 'blue',
						//     color: 'white',
						// }}
						>
							{props.children}
						</div>
					</Grid>
				</Container>
			</div>
		</main>
	)
}
