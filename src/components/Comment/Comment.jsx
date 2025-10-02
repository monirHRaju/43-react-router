import React from 'react';
import { Link } from 'react-router';

const Comment = ({comment}) => {
    
    const {id, name, email} = comment;
        const commentStyle = {
        border: '1px solid yellow',
        display: 'flex',
        gap: '20px'
    }
    return (
        <div style={commentStyle}>
            <h3>{name}</h3>
            <p>{email}</p>
            <Link to={`/comments/${id}`}>
                <button>Comment Details</button>
            </Link>
        </div>
    );
};

export default Comment;