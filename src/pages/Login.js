import React, { useState } from 'react';
import './Login.css';
import api from '../services/api';

import logo from '../assets/tinder.png';

export default function Login({ history }){
    const [username, setUsername] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const response = await api.post('/devs', {
            username,
        });
        
        const { _id } = response.data;

        history.push(`/dev/${_id}`);

    }
    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}>
            <img style={{ width: '50px'}} className="logo" src={logo} alt="logo"/>
            <input 
            placeholder = "Digite seu usuário no Github"
            value={username}
            onChange={e => setUsername(e.target.value)}
            />
            <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
