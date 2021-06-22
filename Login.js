import React,{useState} from 'react'
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const login=(e)=>{
        e.preventDefault();//prevents refreshing
        //logic to login
        auth
        .signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            //loggedin, redirect to homepage
            history.push("/");
        })
        .catch((e)=>alert(e.message));

    };
    const register=(e)=>{
        e.preventDefault();
        //logic to register
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth=>{
            //loggedin, redirect to homepage
            history.push("/");
        })
        .catch((e)=>alert(e.message));
    };
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt=""
                />
            </Link>
            <div className="login__container">
            <h1>Sign in</h1>
            <form>
                <label>E-mail</label><br></br>
                <input type="text" value={email} onChange={event=>setEmail(event.target.value)}/><br></br>
                <label>Password</label><br></br>
                <input type="password" value={password} onChange={event=>setPassword(event.target.value)}/><br></br>
                <button onClick={login} type="submit" className="login__signinButton">Sign In</button>
            </form>
            <p>By signing-in you agree to Amazon's conditions of use & sale. Please see out Privacy Notice, our Cookies Notice and our interest-based Ads Notice.</p>
            <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
