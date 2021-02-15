import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import WebsiteHeader from './WebsiteHeader';
import WebSiteHomePage from './WebSiteHomePage';
import WebSiteNavbar from './WebSiteNavbar';
import { BrowserRouter, Route } from 'react-router-dom';
import WebsiteViewCourse from './WebsiteViewCourse';
import WebsiteAbout from './WebsiteAbout';

import WebsiteAddCourse from './WebsiteAddCourse';
import WebsiteContact from './WebsiteContact';

export default function MainHome() {
    const details = { title: 'main page here', desc: 'desc here' };
    return (
        <BrowserRouter>
            <Container className="maincontainer">
                <WebsiteHeader headerDetails={details} />
                <Row>
                    <Col md={4}>
                        <WebSiteNavbar />
                    </Col>
                    <Col md={8}>
                        <Route path="/" component={WebSiteHomePage} exact />
                        <Route path="/add-course" component={WebsiteAddCourse} exact />
                        <Route path="/view-course" component={WebsiteViewCourse} exact />
                        <Route path="/about" component={WebsiteAbout} exact />
                        <Route path="/contact" component={WebsiteContact} exact />
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    )
}
