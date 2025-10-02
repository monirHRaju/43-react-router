import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const PostDetail = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    
    const params = useParams();
    // to receive params
    console.log(params)

    
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            
            <button onClick={() => navigate(-1)}>Go Back</button>
            
           
        </div>
    );
};

export default PostDetail;