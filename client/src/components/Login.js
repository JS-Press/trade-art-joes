import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = ( { handleLogin } ) => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

  const onChangeName = (event) => {
    setUsername(event.target.value);
  }

  const onChangePass = (event) => {
    setPassword(event.target.value);
  }

    function handleLogClick(){
      console.log('trying to log in ' + username)

      fetch("/login", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({ username: username, password_digest: password }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => handleLogin(user));
          navigate('/')
        } else {
          r.json().then((err) => setErrors(err.errors));
          console.log('login errors:' + errors)
        }
      });
      setUsername('')
      setPassword('')
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
            <p className='loading' >{errors}</p>
        </div>
    );
}

export default Login;
