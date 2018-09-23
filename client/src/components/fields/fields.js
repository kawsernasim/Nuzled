import React from 'react';
import { FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';

const FieldGroup = (props) => {
    return (
            <FormGroup controlId={props.id}>
                <ControlLabel>{props.label}</ControlLabel>
                <FormControl {...props}/>
                {props.help && <HelpBlock>{props.help}</HelpBlock>}
            </FormGroup>
    )
}

export default FieldGroup;