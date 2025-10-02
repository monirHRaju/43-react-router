import React from 'react';
import { useLoaderData } from 'react-router';
import User from './User';

const Users = () => {
    const users = useLoaderData()
    
    
    return (
        <div>
            <h1>This is users page: {users.length}</h1>
            <div>
                {users.map(user => <User key={user.id} user={user}></User> )}
            </div>
        </div>
    );
};

export default Users;