import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';

const User = () => {
    const [users, setUsers] = useState([]);

// External
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log("response: ", res);
                setUsers(res.data);
            })
            .catch((error) => {
                console.error("Error getting data: ", error)
            })
    }, []);

    return (
        <div>Users
        <ul>
            {users.map(user => {
                return (
                    <li key={user.id}> {user.name} - {user.email}</li>
                );
            })}  
        </ul>
    </div>);
};

export default User;