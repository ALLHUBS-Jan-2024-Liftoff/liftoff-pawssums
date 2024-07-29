import React, { useState } from "react";

export const RegistrationForm = () => {
    const [values, setValues] = useState({
        name:'',
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
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label class="form-label" htmlFor="name">Name</label>
                        <input class="form-control" type="text" id="name" name="name" placeholder="Enter name" onChange={handleInput}  ></input>
                    </div>
                    <div className="mb-3">
                        <label class="form-label" htmlFor="email">E-mail</label>
                        <input class="form-control" type="email" id="email" name="email" placeholder="Enter e-mail" onChange={handleInput} ></input>
                    </div>
                    <div className="mb-3">
                        <label class="form-label" htmlFor="password">Password</label>
                        <input class="form-control" type="password" id="password" name="password" placeholder="Enter password" onChange={handleInput}  ></input>
                    </div>
                    <button className="btn btn-success border w-100" type="submit">Register</button>
                    <button className="btn btn-link w-100">Already have an account? Log in</button>
                </form>
            </div>
        </div>
        
    )
}