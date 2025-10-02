import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h3>I am header</h3>
            <nav className='main-nav'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/laptops'>Laptops</NavLink>
                <NavLink to='/mobiles'>Mobiles</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/users2'>Users 2</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/comments'>Comments</NavLink>
            </nav>
        </div>
    );
};

export default Header;