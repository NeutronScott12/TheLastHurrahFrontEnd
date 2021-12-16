import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'

export const SubscriptionContainer = () => {
	return (
		<div>
			<h2>Subscriptions</h2>
			<Grid container sx={{ flexGrow: 1 }} spacing={2}>
				<Grid item>
					<Card sx={{ maxWidth: 345 }}>
						<CardMedia
							component="img"
							height="140"
							image="/static/images/cards/contemplative-reptile.jpg"
							alt="green iguana"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								Basic
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Our basic plan that covers most needs
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Learn More</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item>
					<Card sx={{ maxWidth: 345 }}>
						<CardMedia
							component="img"
							height="140"
							image="/static/images/cards/contemplative-reptile.jpg"
							alt="green iguana"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								Advanced
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Our advanced plan that covers most needs
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Learn More</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</div>
	)
}
