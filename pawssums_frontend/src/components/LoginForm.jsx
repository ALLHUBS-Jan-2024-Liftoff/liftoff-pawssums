import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/UserService'; 

export const LoginForm = () => {
    const [values, setValues] = useState({
        email:'',
        password:''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };


const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            localStorage.removeItem('token');
            const response = await loginUser(values.email, values.password);
            console.log('Login successful:', response);
            localStorage.setItem('token', response.token);
            setValues({ email: '', password: '' });
            navigate('/profile', { replace: true });
        } catch (error) {
            console.error('Login failed:', error);
            setError('Login failed. Please check your email and password.');
        }
    };

    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="bg-light p-3 border rounded w-25">
                <h2>Login</h2>
                {error && (
                    <div className="alert alert-warning" role="alert">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} method="POST">
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">E-mail</label>
                    <input className="form-control" type="email" id="email" name="email" placeholder="Enter e-mail" onChange={handleInput} ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input className="form-control" type="password" id="password" name="password" placeholder="Enter password" onChange={handleInput}  ></input>
                </div>
                <button className="btn btn-success border w-100" type="submit">Log in</button>
                <Link to="/register" className="btn btn-link w-100">Don't have an account? Register</Link>
            </form>
            </div>
            
        </div>
    )
}