import React from 'react'
import {useDispatch} from 'react-redux'
import { userActions } from '../features/userSlice';

function Logout() {
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(userActions.logout());
    }
    return (
        <div className="logout__container">
            <h1>Welcome To Redux App!</h1>
            <button onClick={(e)=>{handleLogout(e)}}>Logout</button>
        </div>
    )
}

export default Logout
