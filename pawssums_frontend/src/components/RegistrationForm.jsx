import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../services/UserService';

export const RegistrationForm = () => {
    const [values, setValues] = useState({
        name:'',
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
            const response = await registerUser(values.name, values.email, values.password);
            console.log('Registration successful:', response);
            localStorage.setItem('token', response.token);
            navigate('/login');
        } catch (error) {
            console.error('Registration failed:', error);
            setError('Registration failed. Please check your informations and try again.');
        }
    };

    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="bg-light p-3 border rounded w-25">
                <h2>Register</h2>
                {error && (
                    <div className="alert alert-warning" role="alert">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} method="POST">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input className="form-control" type="text" id="name" name="name" placeholder="Enter name" onChange={handleInput}  ></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">E-mail</label>
                        <input className="form-control" type="email" id="email" name="email" placeholder="Enter e-mail" onChange={handleInput} ></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input className="form-control" type="password" id="password" name="password" placeholder="Enter password" onChange={handleInput}  ></input>
                    </div>
                    <button className="btn btn-success border w-100" type="submit">Register</button>
                    <Link to="/login" className="btn btn-link w-100">Already have an account? Log in</Link>
                </form>
            </div>
        </div>
        
    )
}