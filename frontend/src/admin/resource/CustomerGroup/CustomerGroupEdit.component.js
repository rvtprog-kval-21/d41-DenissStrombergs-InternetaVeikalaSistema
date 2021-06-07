import { Edit, SimpleForm, TextInput, required } from 'react-admin'

export function CustomerGroupEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="code" validate={ required() } />
                <TextInput source="name" validate={ required() } />
            </SimpleForm>
        </Edit>
    )
}

export default CustomerGroupEdit
