import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import { createStyles, makeStyles } from '@mui/styles'
import { Breadcrumbs, Theme, Typography } from '@mui/material'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& > * + *': {
				marginTop: theme.spacing(2),
			},
		},
		showText: {
			color: 'white',
			fontSize: 20,
			paddingTop: '.5rem',
		},
	})
)

export default function UrlBreadcrumbs() {
	// const match = useRouteMatch()
	const classes = useStyles()
	const location = useLocation()
	// console.log('location', location)
	// console.log('match', match)

	const formattedArray = location.pathname.split('/')
	const crumbs = formattedArray.splice(1, formattedArray.length)

	// const crumbs = location.pathname.split('/')

	// console.log('CRUMBS', crumbs)

	return (
		<div className={classes.root}>
			<Breadcrumbs separator=">" aria-label="breadcrumb">
				{crumbs.map((path, key) => {
					const section: string[] = crumbs.slice(0, key + 1)
					let url = '/' + section.join('/')

					return (
						<Link
							style={{ textDecoration: 'none' }}
							color="inherit"
							to={`${url}`}
							key={key}
						>
							<Typography
								style={{
									color: '#ededed',
									fontSize: 20,
									paddingTop: '.5rem',
								}}
								variant="subtitle1"
								gutterBottom
							>
								{/* {augmented[key - 1]} */}
								{decodeURIComponent(path)}
							</Typography>
						</Link>
					)
				})}
			</Breadcrumbs>
		</div>
	)
}

// {
/* <Link color="inherit" to={`/`}>
                <Typography variant="subtitle1" gutterBottom>
                    {/* {augmented[key - 1]} */
// }
//         Home
//     </Typography>
// </Link> */}

// console.log('PATH', path)
// if (!path) {
//     return
// }

// const augmented = path
//     .split('/')
//     .splice(1, path.length)
//     .map((value) => {
//         if (value) {
//             let temp = value.slice(1, path.length)
//             let changeString = value[0].toUpperCase() + temp
//             return changeString
//         }
//     })

// console.log('AUGMNETED', path)

// const link = crumbs.splice(key, crumbs.length)
// console.log('INDEX', link)

// const crumbs = routesList
//     .filter(({ path }) => match.path.includes(path))
//     .map(({ path, ...rest }) => ({
//         path: Object.keys(match.params).length
//             ? Object.keys(match.params).reduce((path, param) => {
//                   //@ts-ignore
//                   return path.replace(`:${param}`, match.params[param])
//               }, path)
//             : path,
//         ...rest,
//     }))

// console.log(`Generated crumbs for ${match.path}`)
// crumbs.map(({ name, path }, key) => console.log('Crumb', { name, path }))
