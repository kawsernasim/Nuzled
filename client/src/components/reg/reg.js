import React, {Component} from 'react';
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Checkbox, HelpBlock, Radio, Button} from 'react-bootstrap';
import FieldGroup from '../fields/fields';
import axios from 'axios';

class Reg extends Component {

    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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

    handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            gender: this.state.gender
        }

        console.log(user);

        this.addUser(user);
    }

    addUser = (data) => {

        const options = {
            headers: {
                'Content-Type': 'application/json'
            },
            data
        }
        console.log(options);

        // axios.post('http://localhost:8080/register', options)
        // .then(res =>{
        //     console.log(res)
        //     console.log(res.data)
        // });

        axios({
            method: 'post',
            url: 'http://localhost:8080/register',
            headers: {
                'Content-Type': 'application/json'
            },
            data
        })
        .then((response) => {
            console.log(response);
            console.log(response.data);
        })
    }

    const 

    render() {   
        return (
            <div>
                <Grid>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col sm={6}>
                                <FieldGroup
                                    id="formControlsText"
                                    type="text"
                                    label="First Name"
                                    placeholder="Enter first name"
                                    onChange = {this.onChangeFirstName}
                                />
                            </Col>

                            <Col sm={6}>
                                <FieldGroup
                                    id="formControlsText"
                                    type="text"
                                    label="Last Name"
                                    placeholder="Enter last name"
                                    onChange = {this.onChangeLastName}
                                />
                            </Col>
                        </Row>
                        <FieldGroup inline
                            id="formControlsEmail"
                            type="email"
                            label="Email address"
                            placeholder="Enter email"
                            onChange = {this.onChangeEmail}
                        />
                        <FieldGroup 
                            id="formControlsPassword"
                            label="Password"
                            type="password" 
                            onChange = {this.onChangePassword}
                        />
                        {/* <FieldGroup
                            id="formControlsFile"
                            type="file"
                            label="Profile Picture"
                            help="Upload image file"
                        /> */}

                        <FormGroup controlId="formControlsSelect"> 
                            <ControlLabel>Gender</ControlLabel>
                            <FormControl componentClass="select" placeholder="select" onChange={this.onChangeGender}>
                            <option value="select">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
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