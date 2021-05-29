import { Button, Typography } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'

export function CheckoutGuestForm() {
    const initialValues = {
        email: '',
        password: ''
    }

    const validate = (values) => {
        const errors = {}

        return errors
    }

    const onSubmit = (values, props) => {
        const { setSubmitting } = props

        setSubmitting(false)
        console.log(values)
    }

    const renderForm = (props) => {
        const { submitForm, isSubmitting } = props

        return (
            <Form>
                <Field
                    component={ TextField }
                    type="email"
                    name="email"
                    label="Email"
                    fullWidth
                />
                <Field
                    component={ TextField }
                    type="password"
                    name="password"
                    label="Password"
                    fullWidth
                />
                <Button
                    onClick={ submitForm }
                    disabled={ isSubmitting }
                    variant="contained"
                    color="primary"
                >
                    Sign up
                </Button>
            </Form>
        )
    }

    return (
        <div>
            <Typography>Create an account.</Typography>
            <Formik
                initialValues={ initialValues }
                validate={ validate }
                onSubmit={ onSubmit }
            >
                { renderForm }
            </Formik>
        </div>
    )
}

export default CheckoutGuestForm