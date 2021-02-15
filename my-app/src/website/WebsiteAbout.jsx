import React from 'react'
import { Jumbotron, Button } from 'reactstrap';

export default function WebsiteAbout() {
    return (
        <div>
            <Jumbotron>
                <h1 >Hello, world!</h1>
                <p className="lead">This about</p>
                <hr className="my-2" />
            </Jumbotron>
        </div>
    );
}
