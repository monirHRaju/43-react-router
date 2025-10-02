import React from 'react';
import { useLoaderData } from 'react-router';

const CommentDetails = () => {
    const comment = useLoaderData();
    const {name, email} = comment
    return (
        <div>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    );
};

export default CommentDetails;