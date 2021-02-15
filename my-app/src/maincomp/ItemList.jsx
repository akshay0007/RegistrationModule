import React from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const ItemList = ({ course }) => {
    return (
        <div>
            <Card >
                <CardTitle >{course.name}</CardTitle>
                <CardText>{course.desc}</CardText>
            </Card>
        </div>
    )
}
export default ItemList;
