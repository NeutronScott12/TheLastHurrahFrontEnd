import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
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

export const MainContainer: React.FC = (props) => {
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
