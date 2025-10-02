import React from 'react';
import { Link } from 'react-router';

const user = ({user}) => {
    const {id, name, email, phone} = user;
    const userCardStyle = {
        border : '2px solid yellow',
        padding : '5px',
        margin : '10px',
        borderRadius: '20px'
    }
    
    return (
        <div style={userCardStyle}>
            <h3>{name}</h3>
            <p>{email}</p>
            <p><small>{phone}</small></p> 
            <Link to={`/users/${id}`}>User Details</Link>
        </div>
    );
};

export default user;