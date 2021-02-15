import { React, useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const FormLogin = () => {

    const [loginData, setLoginData] = useState({});

    const onSubmitCall = (event) => {
        console.log(loginData);
        event.preventDefault();
    };


    return (
        <Form onSubmit={onSubmitCall}>
            <FormGroup>
                <Label for="emailaddress">Email</Label>
                <Input type="email" name="email" id="exampleEmail" onChange={(e)=>{
                    setLoginData({...loginData,exampleEmail:e.target.value});
                }} placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" onChange={(e)=>{
                    setLoginData({...loginData,name:e.target.value});
                }}  placeholder="plase name here" />
            </FormGroup>
            <FormGroup>
                <Label for="Password">Password</Label>
                <Input type="password" name="password" id="password" onChange={(e)=>{
                    setLoginData({...loginData,password:e.target.value});
                }} placeholder="plase password here" />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    )


}

export default FormLogin;