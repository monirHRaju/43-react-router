import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    return (
        <div>
            <h3>{user.name}</h3>
            <p>{user.website}</p>

        </div>
    );
};

export default UserDetails;