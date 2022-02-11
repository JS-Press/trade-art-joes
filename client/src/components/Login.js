import React from 'react';
import { useNavigate } from "react-router-dom";

const Login = ( { handleLogin } ) => {

    const navigate = useNavigate()

    function handleLogClick(){
        handleLogin()
        navigate('/')
    }

    return (
        <div>
            <h2 onClick={handleLogClick} >Login!</h2>
        </div>
    );
}

export default Login;
