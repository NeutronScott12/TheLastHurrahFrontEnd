import React from 'react'
import { Button, Grid, TextField } from '@material-ui/core'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { useCreateApplicationMutation } from '../../../generated/graphql'
import { useNavigate } from 'react-router'

const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
})

export const AddApplicationContainer = () => {
    const navigate = useNavigate()
    const [createApplication] = useCreateApplicationMutation()

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        validationSchema,
        async onSubmit({ name }) {
            console.log(name)

            try {
                const response = await createApplication({
                    variables: {
                        createApplicationInput: {
                            application_name: name,
                        },
                    },
                })

                if (response.data) {
                    navigate(
                        `/dashboard/apps/${response.data.create_application.application_name}`,
                    )
                }
            } catch (error) {
                console.log(error)
            }
        },
    })

    return (
        <Grid
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ maxWidth: '50%', margin: 'auto' }}
        >
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Application Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />

                <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </Grid>
    )
}
