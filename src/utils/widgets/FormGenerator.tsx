import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import * as yup from 'yup'
import { FormikHandlers, FormikProps, FormikValues, useFormik } from 'formik'
import React from 'react'
import { FormikInputs } from '../../types'

interface IFormGeneratorProps {
    id: string
    name: string
    label: string
    type: string
}

interface IFormGeneratorInputs {
    formData: IFormGeneratorProps[]
    formikInput: FormikInputs
    validationSchema: any
}

{
    /* <FormGenerator
                formik={formik}
                formData={[
                    { name: 'email', id: 'email', label: 'Email', type: '' },
                    {
                        name: 'username',
                        id: 'username',
                        label: 'username',
                        type: '',
                    },
                ]}
            /> */
}

export const FormGenerator: React.FC<IFormGeneratorInputs> = ({
    formData,
    formikInput,
    validationSchema,
}) => {
    // const formik = useFormik({
    //     initialValues: {
    //         email: '',
    //         password: '',
    //         username: '',
    //         repeat_password: '',
    //     },
    // })

    return (
        <div>
            <h2>FormGenerator</h2>
        </div>
        // <form onSubmit={formik.handleSubmit}>
        //     {formData.map((prop, key) => (
        //         <TextField
        //             key={key + prop.name}
        //             fullWidth
        //             {...prop}
        //             value={formik.values[prop.name]}
        //             onChange={formik.handleChange}
        //             error={
        //                 formik.touched[prop.name] &&
        //                 Boolean(formik.errors[prop.name])
        //             }
        //             helperText={
        //                 formik.touched[prop.name] && formik.errors[prop.name]
        //             }
        //         />
        //     ))}
        // </form>
    )
}
