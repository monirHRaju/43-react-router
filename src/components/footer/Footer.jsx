import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
            <p><small>Thanks for visiting our website</small></p>
            <nav>
                <a href="laptops">Laptops</a>
                <a href="mobiles">Mobiles</a>
                <a href="about">About</a>
            </nav>
        </div>
    );
};

export default Footer;