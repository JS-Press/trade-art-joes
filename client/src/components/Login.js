import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = ( { handleLogin } ) => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  const onChangeName = (event) => {
    setUsername(event.target.value);
  }

  const onChangePass = (event) => {
    setPassword(event.target.value);
  }

    function handleLogClick(){
        handleLogin()
        navigate('/')
    }

    return (
        <div id='loginfo'>
            <br></br>
            <p>username</p>
            <input className='input' value={username} onChange={onChangeName} type="text"/>
            <br></br>
            <p>password</p>
            <input className='input' value={password} onChange={onChangePass} type="password"/>
            <br></br>
            <br></br>
            <button className="inButton" onClick={handleLogClick} >Login</button>
        </div>
    );
}

export default Login;
