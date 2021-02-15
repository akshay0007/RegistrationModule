import React from 'react';

const Footer = ({ name, title }) => {
    return (
        <div className="myclass" style={{ position: 'absolute', bottom: 0, textAlign: 'center' }}>
            <h1>{name}</h1>
            <h1>{title}</h1>
        </div>
    );
}

export default Footer;
