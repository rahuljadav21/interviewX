import React, { useState } from 'react'
import axios from 'axios';
import baseURL from '../../constant.json'
function Admin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmitt = (e) => {
        e.preventDefault();
        console.log('clicked')
        axios.post(baseURL.baseURL+'admin/login', {
            username: username,
            password: password
        }).then((res) => {
            let accessToken = res.headers.get('Authorization');
            console.log(res.headers.get('Authorization'));
            document.cookie = `access-token=${accessToken}; max-age=${60 * 24 * 7 *60}; path=/`;
            window.location.href = '/experiences';
            }).catch((err) => {
            console.log(err);
            });
    }
    return (
        <div>
            <form action="">
                <div className="input-grp">
                    <label htmlFor="username">Username :</label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input-grp">
                    <label htmlFor="password">Password :</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={handleSubmitt}>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Admin