import { React, useEffect } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'

export default function WebsiteCourseView({ course, update }) {
    const effect = useEffect(() => {
        console.log("api call");
    }, []);

    const callDelete = (e) => {
        update(course.id);
        console.log("call coming=="+course.id);
    };
    return (
        <Card body>
            <CardTitle>{course.title}</CardTitle>
            <CardText>{course.body}</CardText>
            <Button onClick={callDelete}>click here</Button>
        </Card>
    )
}
// componentdidmount,componetdidupdate,componentwillunmont