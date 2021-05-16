import { useState } from 'react'
import { ReferenceInput, SelectInput, SimpleForm, useCreate, useRefresh  } from 'react-admin'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

export function AttributeSetAttributeCreate(props) {
    const [open, setOpen] = useState(false);
    const [create, { loading, error }] = useCreate()
    const refresh = useRefresh()

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const onSave = (test) => {
        const { record: { id } } = props
        const attributeSetAttribute = { attribute_set_id: id, attribute_id: test.attribute_id }

        create('AttributeSetAttribute', attributeSetAttribute)

        if (!error && !loading) {
            handleClose()
            refresh()
        }
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Add attribute
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Select attribute</DialogTitle>
                <DialogContent>
                    <SimpleForm resource="AttributeSetAttribute" save={ onSave }>
                        <ReferenceInput source="attribute_id" reference="Attribute">
                            <SelectInput source="name" />
                        </ReferenceInput>
                    </SimpleForm>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AttributeSetAttributeCreate
