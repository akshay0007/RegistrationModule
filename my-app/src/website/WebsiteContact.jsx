import {React,useEffect} from 'react'
import { Jumbotron, Button } from 'reactstrap';

export default function WebsiteContact() {
    const effect = useEffect(() => {
        document.title="contatnct ";
    }, []);
    return (
        <div>
            <Jumbotron>
                <h1 >Hello, world!</h1>
                <p className="lead">contact</p>
                <hr className="my-2" />
            </Jumbotron>
        </div>
    )
}
