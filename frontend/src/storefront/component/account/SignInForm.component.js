import { useApolloClient } from '@apollo/client'
import { Button } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { useDispatch } from 'react-redux'
import { signIn } from '../../query/Account.query'

export function SignInForm() {
    const client = useApolloClient()
    const dispatch = useDispatch()
    const initialValues = {
        email: '',
        password: ''
    }

    const validate = (values) => {
        const errors = {}

        return errors
    }

    const onSubmit = async (values, props) => {
        const { setSubmitting } = props

        setSubmitting(false)

        dispatch({
            type: 'SIGN_IN',
            payload: {
                account: await signIn(client, values)
            }
        })
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
                    Sign in
                </Button>
            </Form>
        )
    }

    return (
        <Formik
            initialValues={ initialValues }
            validate={ validate }
            onSubmit={ onSubmit }
        >
            { renderForm }
        </Formik>
    )
}

export default SignInForm