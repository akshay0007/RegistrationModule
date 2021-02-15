import React from 'react';
import { Jumbotron, Button } from 'reactstrap';


const WebSiteHomePage = () => {
    return (
        <div>
            <Jumbotron>
                <h1 >Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
            </Jumbotron>
        </div>
    );
}

export default WebSiteHomePage;
