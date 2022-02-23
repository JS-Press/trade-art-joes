import React, { useState }  from "react";
import {useNavigate} from "react-router-dom"

const Signup = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState('');
    const [errors, setErrors] = useState('');


  const onChangeForm = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
        ...formData,
        [name]: value,
      })
  }


    return (
        <div className='signupContainer' > 
            <div className='SignUpInfo'>
                <div className='SignUpInfoC'>
                    <p>username</p>
                    <input className='inputS' name='username' value={formData.username} onChange={onChangeForm} type="text"/>
                    <br></br>
                    <div className='SignUpInfoR'>
                        <div className='SignUpInfoCmini' style={{marginRight:20}}>
                            <p>first name</p>
                            <input className='inputS' name='first_name' value={formData.username} onChange={onChangeForm} type="text"/>
                        </div>
                        <div className='SignUpInfoCmini'>
                            <p>last name</p>
                            <input className='inputS' name='last_name' value={formData.password_digest} onChange={onChangeForm} type="text"/>
                        </div>
                    </div>
                    <br></br>
                    <p>password</p>
                    <input className='inputS' name='password_digest' value={formData.password_digest} onChange={onChangeForm} type="password"/>
                </div>
                <div className='SignUpInfoC'>
                    <p>first name</p>
                    <input className='inputS' name='first_name' value={formData.username} onChange={onChangeForm} type="text"/>
                    <br></br>
                    <p>last name</p>
                    <input className='inputS' name='last_name' value={formData.password_digest} onChange={onChangeForm} type="text"/>
                </div>
            </div>
            <br></br>
            <button className="inButton" style={{marginTop:50, position:'relative'}} >SignUp</button>
            <p className='loading' >{errors}</p>
        </div>
    );
}

export default Signup;
