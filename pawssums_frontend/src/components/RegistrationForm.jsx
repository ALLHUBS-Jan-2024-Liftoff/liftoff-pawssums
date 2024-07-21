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
        console.log("it,s working!");
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter name" onChange={handleInput}  ></input>
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" placeholder="Enter e-mail" onChange={handleInput} ></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter password" onChange={handleInput}  ></input>
                </div>
                <button type="submit">Register</button>
                <p>Already have an account?</p>
                <button>Log in</button>
            </form>
            
        </div>
    )
}