import { React, useState, useEffect, memo } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import WebsiteCourseView from './WebsiteCourseView';
import axios from 'axios';




export default function WebsiteViewCourse() {
    const baseurl = "https://jsonplaceholder.typicode.com/posts/";
    const getAllPosts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/`).then(
            (response) => {
                console.log(response.data);
                setUserList(response.data);
            },
            (error) => {
                console.log(error);
                alert("something went wrong");
            }
        );
    }
    const effect = useEffect(() => {
        document.title = "course view";
        getAllPosts();
    }, []);

    const [userList, setUserList] = useState([]);

    const updateUser = (id) => {
        console.log("response got==" + id);
        setUserList(userList.filter((itme) => itme.id != id));
    }


    return (
        <div>
            <Jumbotron>
                {
                    userList.map((item) => (
                        <WebsiteCourseView key={item.id} course={item} update={updateUser} />
                    ))
                }
            </Jumbotron>
        </div>
    )
}
