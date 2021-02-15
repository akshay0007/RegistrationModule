import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Courses from './Courses'
import FormLogin from './LoginForm';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <FormLogin />
                <Courses />
            </div>
        );
    }
}

export default Home;
