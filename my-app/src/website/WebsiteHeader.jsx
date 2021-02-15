import React from 'react';
import { Card,CardBody } from 'reactstrap';

const WebsiteHeader = (headerDetails) => {
    return (
        <div>
            <Card className="my-1 bg-warning" >
                <CardBody>
                    <h1 className="text-center my-1">Main header</h1>
                </CardBody>
            </Card>
        </div>
    );
}

export default WebsiteHeader;
