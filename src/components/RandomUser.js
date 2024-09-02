import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';

const RandomUser = () => {

    const [firstName, setFirstName] = useState("first name");
    const [lastName, setLastName] = useState("last name");
    const [changeUser, setChangeUser] = useState(false);

    // useEffect(() => {
    //     fetch('https://randomuser.me/api/')
    //     .then((response) => response.json())
    //     .then((data) => {
    //     console.log("random user data: ", data);
    //     setFirstName(data.results[0].name.first);
    //     setLastName(data.results[0].name.last)});
    // }, [changeUser]);
    // If use effect detects a change of state, it will re-call the use effect function.

    useEffect(() => {
        axios.get('https://randomuser.me/api/')
            .then((res) => {
                console.log("random user data: ", res);
                setFirstName(res.data.results[0].name.first);
                setLastName(res.data.results[0].name.last)
            });
    }, [changeUser]);

    return (
        <div>
            <h1>Random User {firstName} {lastName}</h1>
            <button onClick={() => setChangeUser(!changeUser)}>Generate Random User</button>
        </div>

    )
}

export default RandomUser;