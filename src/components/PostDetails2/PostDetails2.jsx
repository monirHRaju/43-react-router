import React, { use } from 'react';

const PostDetails2 = ({postPromise}) => {
    const post = use(postPromise)
    const { title, body} = post
    console.log(post)
    return (
        <div>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails2;