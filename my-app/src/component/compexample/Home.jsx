import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';
import React from 'react'

const Home = () => {
    return (
        <div className="homebody">
            <Card className="cardhome" >
                <CardHeader tag="h2" className="card-header">Application</CardHeader>
                <CardBody className="card-body">
                    <CardTitle tag="h5">DETILS</CardTitle>
                    <CardText>TEXT</CardText>
                    <Button>Go some where else</Button>
                </CardBody>
                <CardFooter tag="h2" className="card-header"> FOOTER</CardFooter>
            </Card>
        </div>
    )
}
export default Home;