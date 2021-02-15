import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default function WebSiteNavbar() {
    return (
        <div>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag="a" to="/">Home</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/view-course">View course</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/add-course">Add course</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/about">About</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/contact">Contact</Link>
            </ListGroup>
        </div>
    )
}
