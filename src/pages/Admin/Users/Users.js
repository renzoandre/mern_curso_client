import React, { useState, useEffect } from 'react';
import { getAccessTokenApi } from '../../../api/auth';
import { getUsersActivesApi } from '../../../api/user';
import ListUsers from '../../../components/Admin/Users/ListUsers';

import './Users.scss';

export default function Users() {
    const [usersActives, setUsersActives] = useState([]);
    const [usersInactives, setUsersInactives] = useState([]);
    const [reloadUsers, setReloadUsers] = useState(false);
    const token = getAccessTokenApi();

    useEffect(() => {
        getUsersActivesApi(token, true).then((response) => {
            setUsersActives(response.users);
        });
        getUsersActivesApi(token, false).then((response) => {
            setUsersInactives(response.users);
        });

        setReloadUsers(false);
    }, [token, reloadUsers]);

    return (
        <div className="users">
            <ListUsers usersActives={usersActives} usersInactives={usersInactives} setReloadUsers={setReloadUsers} />
        </div>
    );
}
