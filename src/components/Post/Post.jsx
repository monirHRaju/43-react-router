import React, { Suspense, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import PostDetails2 from '../PostDetails2/PostDetails2';

const Post = ({post}) => {
    const {id, title} = post;
    const postStyle = {
        border: '1px solid yellow',
        marginBottom: '5px',
        borderRadius: '10px'
    }
    const [showInfo, setShowInfo] = useState(false);

    const postPromise = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json())
    // console.log(postPromise)
    const navigate = useNavigate();
    return (
        <div style={postStyle}>
            <h3>{title}</h3>
           
           {/* 1st way: navigate show details method 1 */}
            <Link to={`/posts/${id}`}>
                <button>Post Details</button>
            </Link>
            {/* 2nd way to navigate */}
            <button onClick={() => navigate(`/posts/${id}`)}>Details of {id}</button>

            {/* 3rd way : show post details below the box/ in this page */}
            <button onClick={() => setShowInfo(!showInfo)}> {showInfo ? 'Hide' :  'Show'} Info</button>

            
            {
                showInfo && <Suspense fallback={<span>Loading...</span>}>
                    <PostDetails2 postPromise={postPromise}></PostDetails2>
                </Suspense>
            }
        </div>
    );
};

export default Post;