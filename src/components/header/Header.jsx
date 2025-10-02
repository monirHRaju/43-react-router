import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <h3>I am header</h3>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <NavLink to='laptops'>Laptops</NavLink>
                <NavLink to='mobiles'>Mobiles</NavLink>
            </nav>
        </div>
    );
};

export default Header;