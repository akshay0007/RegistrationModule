import React from 'react';

const Header = ({ name, title }) => {
    return (
        <div style={{ alignItems: 'center', textAlign: 'center', background: 'yellow', padding: 11 }}>
            <h1>{name}</h1>
            <h1>{title}</h1>
        </div>
    );
}

export default Header;


// npm install bootstrap reactstrap
// npm install reactstrap react react-dom
// npm install react-toastify
//npm install axios