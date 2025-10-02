import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';
import './Posts.css'
const Posts = () => {
    const posts = useLoaderData();
    
    return (
        <div>
            <h3>these are my posts: {posts.length}</h3>
            <div className='posts-styles'>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;