import React from "react";
import './css/login.css'


const Login = ({ onLogin, currentUserId, setTheme, themeDefault, setSignUp, showSignIn }) => {

    let image = require('./images/logo.png')

    function showPasswordToggle() {
        var x = document.getElementById("passwordInput");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('logging in...')
        fetch("/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: e.target.username.value,
                    password: e.target.password.value
                }),
            })
            .then(res => res.json())
            .then((user) => {   
                // console.log(user.id)


                if (user.id) { 
                    onLogin(user.id)
                    setTheme(user.id)
                } else {
                    alert("Username or Password is incorrect")
                }

            })


    };

    if (!currentUserId) {

        return (
            <div className="login-container" style={showSignIn ? { display: "flex" } : { display: "none" }}>
                <div className="login">
                    <img className="logo" src={image} />
                    <h2> REGIMEN </h2>
                    <form onSubmit={(e) => handleLogin(e)}>
                        <input type="text" name="username" placeholder="Username" /> <br />
                        <input type="password" name="password" placeholder="Password" id="passwordInput" /> <br />
                        <input type="checkbox" onClick={()=> showPasswordToggle()} id="passwordToggle" /> Show Password <br />
                        <button id="sign-in-button"
                            type="submit"
                            className="submit">
                            SIGN IN </button> <br/>
                        <h2 style={{ margin: "0px", fontSize: "18px" }}> or</h2> <br />
                    </form>

                    <button id="sign-up-button"
                        onClick={() => setSignUp()}>
                        SIGN UP </button> 
                        <br/>

                </div>

            </div>
        )
    }

}

export default Login