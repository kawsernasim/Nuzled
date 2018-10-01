import React, {Component} from 'react';
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Checkbox, HelpBlock, Radio, Button} from 'react-bootstrap';
import FieldGroup from '../fields/fields';

class Reg extends Component {

    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            gender: '',
        }
    }

    onChangeFirstName = (e) => {this.setState({firstname: e.target.value});}
    onChangeLastName = (e) => {this.setState({lastname: e.target.value});}
    onChangeEmail = (e) => {this.setState({email: e.target.value});}
    onChangePassword = (e) => {this.setState({password: e.target.value});}
    onChangeGender = (e) => {this.setState({gender: e.target.value});}
    onSubmit = (e) => {this.setState({name: e.target.value});}

    render() {   
        return (
            <div>
                <Grid>
                    <Form>
                        <Row>
                            <Col sm={6}>
                                <FieldGroup
                                    id="formControlsText"
                                    type="text"
                                    label="First Name"
                                    placeholder="Enter first name"
                                />
                            </Col>

                            <Col sm={6}>
                                <FieldGroup
                                    id="formControlsText"
                                    type="text"
                                    label="Last Name"
                                    placeholder="Enter last name"
                                />
                            </Col>
                        </Row>
                        <FieldGroup inline
                            id="formControlsEmail"
                            type="email"
                            label="Email address"
                            placeholder="Enter email"
                        />
                        <FieldGroup 
                            id="formControlsPassword"
                            label="Password"
                            type="password" 
                        />
                        <FieldGroup
                            id="formControlsFile"
                            type="file"
                            label="Profile Picture"
                            help="Upload image file"
                        />

                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Gender</ControlLabel>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="select">Male</option>
                                <option value="other">Female</option>
                            </FormControl>
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Grid>       
            </div>

        );
    }
  }
  
//   const formInstance = (
//   );

export default Reg;