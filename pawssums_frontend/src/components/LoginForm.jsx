import React, { useState } from "react";

export const LoginForm = () => {
    const [values, setValues] = useState({
        email:'',
        password:''
    })
    
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("it's working!");
    }

    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="bg-light p-3 border rounded w-25">
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label class="form-label" htmlFor="email">E-mail</label>
                    <input class="form-control" type="email" id="email" name="email" placeholder="Enter e-mail" onChange={handleInput} ></input>
                </div>
                <div className="mb-3">
                    <label class="form-label" htmlFor="password">Password</label>
                    <input class="form-control" type="password" id="password" name="password" placeholder="Enter password" onChange={handleInput}  ></input>
                </div>
                <button className="btn btn-success border w-100" type="submit">Sign in</button>
                <button className="btn btn-link w-100">Don't have an account? Register</button>
            </form>
            </div>
            
        </div>
    )
}