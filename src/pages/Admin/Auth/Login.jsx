import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { accountService } from '@/_services';

import { Form, Button } from 'react-bootstrap';

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
        <Form onSubmit={onSubmit}>
            <h2>Se connecter</h2>
            <Form.Group controlId="formEmail">
                <Form.Label>Identifiant</Form.Label>
                <Form.Control type="text" name="email" value={credentials.email} onChange={onChange} />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control type="password" name="password" value={credentials.password} onChange={onChange} />
            </Form.Group>

            <Button className='mt-3' variant="primary" type="submit">
                Connexion
            </Button>
        </Form>
    );
};

export default Login;