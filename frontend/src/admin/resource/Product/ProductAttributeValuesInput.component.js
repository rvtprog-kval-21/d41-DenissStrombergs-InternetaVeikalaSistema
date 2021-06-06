import { useRecordContext } from 'react-admin'
import { useEffect, useState } from 'react'
import { GET_ATTRIBUTE_SET } from '../../../storefront/query/Product.query'
import { Formik, Form, Field } from 'formik'
import STYLE from '../../../base/Style'
import { TextField, Select, Switch } from 'formik-material-ui'
import { Typography, FormControl, InputLabel, MenuItem } from '@material-ui/core'

export function ProductAttributeValuesInput(props) {
    const { record: { attributeValues }, setAttributeValues } = props
    const classes = STYLE.form()
    const [attributeSet, setAttributeSet] = useState(null)
    const record = useRecordContext()

    useEffect(async () => {
        const data = await fetch('http://localhost:3001/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                query: GET_ATTRIBUTE_SET,
                variables: { id: record.attribute_set_id }
            })
        }).then((data) => data.json()).then(({ data }) => data.attributeSet)

        if (!attributeSet) {
            setAttributeSet(data)
        }
    })

    if (!attributeSet) {
        return null
    }

    const initialValues = {
        ...attributeValues
    }

    const onSubmit = (values, { setSubmitting }) => {
        setSubmitting(false)
    }

    const renderField = (attribute) => {
        const { attributeOptions, type, code, label } = attribute

        if (type === 'boolean') {
            return (
                <InputLabel
                    htmlFor={ code }
                >
                    { label }
                    <Field
                        name={ code }
                        type="checkbox"
                        component={ Switch }
                        color="primary"
                    />
                </InputLabel>
            )
        }

        if (type === 'number') {
            return (
                <Field
                    component={ TextField }
                    type="number"
                    name={ code }
                    fullWidth
                />
            )
        }

        if (type === 'string') {
            return (
                <Field
                    component={ TextField }
                    type="text"
                    name={ code }
                    fullWidth
                />
            )
        }

        return (
            <FormControl fullWidth>
                <InputLabel htmlFor={ code }>{ label }</InputLabel>
                <Field
                    component={ Select }
                    name={ code }
                    label={ label }
                    fullWidth
                    inputProps={{
                        id: { code }
                    }}
                >
                    { attributeOptions.map(({ value }) => {
                        return (
                            <MenuItem value={ value }>{ value }</MenuItem>
                        )
                    }) }
                </Field>
            </FormControl>
        )
    }

    const renderForm = () => {
        const { attributes } = attributeSet

        return (
            <Form className={ classes.root }>
                <Typography>Attribute values</Typography>
                { attributes.map(renderField) }
            </Form>
        )
    }

    const onValidate = (attributeValues) => {
        setAttributeValues(attributeValues)
    }

    return (
        <Formik
            initialValues={ initialValues }
            onSubmit={ onSubmit }
            validate={ onValidate }
        >
            { renderForm }
        </Formik>
    )
}

export default ProductAttributeValuesInput
