import React from 'react'
import { Button, Grid } from '@material-ui/core'

import { DisplayApps } from '../components/DisplayApps/DisplayApps'
import { Link } from 'react-router-dom'
// import { displayAppUseStyles } from '../styles/dashBoardStyles'

export const AccountContainer: React.FC = () => {
    // const classes = displayAppUseStyles()

    return (
        <Grid style={{ background: 'lightblue', marginTop: '1rem' }}>
            <Button
                component={Link}
                style={{}}
                to="/dashboard/apps/add_application"
            >
                Add Application
            </Button>
            <DisplayApps />
        </Grid>
    )
}
