import React, { useState } from 'react'
import {useDispatch}from 'react-redux'
import { userActions } from '../features/userSlice'

function Login() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        
        e.preventDefault();
        dispatch(userActions.login(
            {
                name: name,
                email: email,
                password: password,
                loggedIn:true
            }
        )
        )
    }
    return (
        <div className="cred__container">
            <form onSubmit={(e)=>handleSubmit(e)}>
            <h2>Log In</h2>
            <input type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setname(e.target.value)} />
            <input type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setemail(e.target.value)} />
            <input type="password"
                placeholder="Enter Password"
                value={password}
                    onChange={(e) => setpassword(e.target.value)} />
                <button type="submit" >Login</button>
            </form>
            
        </div>
    )
}

export default Login
