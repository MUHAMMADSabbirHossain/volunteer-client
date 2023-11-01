import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <h1>Footer</h1>
            <footer><p><small>Copyright &copy; {(new Date().getFullYear())} Volunteer Network. All rights reserved.</small></p></footer>

        </div>
    );
};

export default Footer;