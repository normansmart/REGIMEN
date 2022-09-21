import React from "react";
import { useState } from "react";
import './css/signup.css'

const SignUp = ({onLogin, currentUserId,  setShow , hide}) => {

   

    let image = require('./images/logo.png')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('creating user...')

        fetch("/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              username: e.target.username.value,
              password: e.target.password.value,
              first_name: e.target.first_name.value,
              last_name: e.target.last_name.value,
        
            }),
        })
        .then(r => r.json())
        .then(user =>{
            console.log(user)
            onLogin(user.id)
        } );
    }
    if (!currentUserId) {
    return (
        <div className="signup-container" style={setShow ? {display:"block"} : {display:"none"}}>
                <img className="logo" src={image} />
                <h2> REGIMEN </h2>

            <form onSubmit={(e)=>handleSubmit(e)}>
                <h1> CREATE YOUR ACCOUNT</h1>
                <input type="text" name="first_name" placeholder="First Name" />
                <input type="text" name="last_name" placeholder="Last Name" /><br/>
                <input type="text" name="username" placeholder="Username" /><br/>
                <input type="text" name="password" placeholder="Password" /><br/>

                <button id="sign-up-button"
                    type="submit"
                    name="submit"
                    className="submit" onClick={()=> hide()} >
                    SIGN IN </button>


            </form>


        </div>
    )}

}

export default SignUp