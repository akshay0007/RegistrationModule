import { React, useState } from 'react'
import { Jumbotron, Button, Container } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'

export default function WebsiteAddCourse() {
    const addItems = (e) => {
        console.log(listTodo);
        addTodoInServer(listTodo);
        e.preventDefault();
    };
    const [listTodo, setListTodo] = useState({});

    const addTodoInServer = (item) => {
        axios.post(`https://jsonplaceholder.typicode.com/posts/`,item).then(
            (response) => {
                console.log(response.data);
            },
            (error) => {
                console.log(error);
                alert("something went wrong");
            }
        );
    };

    return (
        <div>
            <Jumbotron>
                <Form onSubmit={addItems}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title" placeholder="please enter title" onChange={
                            (e) => {
                                setListTodo({ ...listTodo, title: e.target.value });
                            }
                        } />
                    </FormGroup>
                    <FormGroup>
                        <Label for="title">body</Label>
                        <Input type="text" name="body" id="body" placeholder="please enter body" onChange={
                            (e) => {
                                setListTodo({ ...listTodo, body: e.target.value });
                            }
                        } />
                    </FormGroup>
                    <FormGroup>
                        <Label for="title">userId</Label>
                        <Input type="text" name="userId" id="userId" placeholder="please enter userId" onChange={
                            (e) => {
                                setListTodo({ ...listTodo, userId: e.target.value });
                            }
                        } />
                    </FormGroup>
                    <Button>Add Course</Button>
                </Form>

            </Jumbotron>
        </div>
    )
}
