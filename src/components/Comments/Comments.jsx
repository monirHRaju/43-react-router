import React from 'react';
import { useLoaderData } from 'react-router';
import Comment from '../Comment/Comment';

const Comments = () => {

    const comments = useLoaderData()
    console.log(comments);
    
    return (
        <div>
            <h3>all comments</h3>
            <div>
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default Comments;<h3>all comments</h3>