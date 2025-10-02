import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id, title} = post;
    const postStyle = {
        border: '1px solid yellow',
        marginBottom: '5px',
        borderRadius: '10px'
    }
    const navigate = useNavigate();
    return (
        <div style={postStyle}>
            <h3>{title}</h3>
           
            <Link to={`/posts/${id}`}>
                <button>Post Details</button>
            </Link>
            {/* 2nd way to navigate */}
            <button onClick={() => navigate(`/posts/${id}`)}>Details of {id}</button>
        </div>
    );
};

export default Post;