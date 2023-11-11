import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { accountService } from '@/_services';

import './auth.css'

const Login = () => {

    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: 'anthony@gmail.com',
        password: 'Emmanini6363!'
    })

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })

    }

    const onSubmit = (e) => {
        e.preventDefault()
        accountService.login(credentials)
        .then(res => {
            console.log(res)
            accountService.saveToken(res.data.access_token)
            navigate('/admin')
        })
        .catch(error => console.log(error))
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='group'>
                <label htmlFor="email">Identifiant</label>
                <input type="text" name="email" value={credentials.email} onChange={onChange}/>
            </div>
            <div className='group'>
                <label htmlFor="password">Mot depasse</label>
                <input type="password" name="password" value={credentials.password} onChange={onChange}/>
            </div>
            <div className='group'>
                <button>Connexion</button>
            </div>
        </form>
    );
};

export default Login;