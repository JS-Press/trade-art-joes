import React, { useState }  from "react";
import {useNavigate} from "react-router-dom"

const Signup = ({ handleLogin }) => {

    const navigate = useNavigate()
    // const [name, setName] = useState('');
    // const [value, setValue] = useState('');
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState('');


  const onChangeForm = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
        ...formData,
        [name]: value,
      })
  }

  function handleSubmit(e){
    e.preventDefault();
    setErrors([]);
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...formData}),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => handleLogin(user));
        setFormData({})
        navigate('/')
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


    return (
        <div className='signupContainer' > 
            <div className='SignUpInfo'>
                <div className='SignUpInfoC'>
                <div className='SignUpInfoR'>
                        <div className='SignUpInfoCmini' style={{marginRight:50}}>
                        <p style={{alignSelf:'flex-start', fontSize:20 }} >username</p>
                        <input className='inputS' name='username' value={formData.username} onChange={onChangeForm} type="text"/>
                        </div>
                        <div className='SignUpInfoCmini'>
                        <p style={{alignSelf:'flex-start', fontSize:20 }}>email</p>
                        <input className='inputS' name='email' value={formData.email} onChange={onChangeForm} type="text"/>
                        </div>
                    </div>
                    
                    <div className='SignUpInfoR'>
                        <div className='SignUpInfoCmini' style={{marginRight:50}}>
                            <p style={{alignSelf:'flex-start', fontSize:20 }} >first name</p>
                            <input className='inputS' name='first_name' value={formData.first_name} onChange={onChangeForm} type="text"/>
                        </div>
                        <div className='SignUpInfoCmini'>
                            <p style={{alignSelf:'flex-start', fontSize:20 }} >last name</p>
                            <input className='inputS' name='last_name' value={formData.last_name} onChange={onChangeForm} type="text"/>
                        </div>
                    </div>
                    
                    <div className='SignUpInfoR'>
                        <div className='SignUpInfoCmini' style={{marginRight:50}}>
                        <p style={{alignSelf:'flex-start', fontSize:20 }} >password</p>
                        <input className='inputS' name='password_digest' value={formData.password_digest} onChange={onChangeForm} type="password"/>
                        </div>
                        <div className='SignUpInfoCmini'>
                        <p style={{alignSelf:'flex-start', fontSize:20 }} >profile pic link</p>
                        <input className='inputS' name='profile_pic' value={formData.profile_pic} onChange={onChangeForm} type="password"/>
                        </div>
                    </div>
    
                    <div className='SignUpInfoR'>
                        <div className='SignUpInfoCmini' style={{marginRight:50}}>
                        <p style={{alignSelf:'flex-start', fontSize:20 }} >art site</p>
                        <input className='inputS' name='website' value={formData.website} onChange={onChangeForm} type="text"/>
                        </div>
                        <div className='SignUpInfoCmini'>
                        <p style={{alignSelf:'flex-start', fontSize:20 }} ></p>
                        <div className='inputS' style={{borderStyle:'none'}}></div>
                        </div>
                    </div>
                    </div>
                <div className='SignUpInfoC'>
                    <p style={{alignSelf:'flex-start', fontSize:20 }} >bio</p>
                    <input className='inputS' name='bio' value={formData.bio} onChange={onChangeForm} type="text"/>
                        <p style={{alignSelf:'flex-start', fontSize:20 }} >mailing address</p>
                        <input className='inputS' name='address' value={formData.address} onChange={onChangeForm} type="text"/>
                    <div className='SignUpInfoR'>
                        <div className='SignUpInfoCmini' style={{marginRight:50}}>
                        <p style={{alignSelf:'flex-start', fontSize:20 }} >city</p>
                        <input className='inputS' name='city' value={formData.city} onChange={onChangeForm} type="text"/>
                        </div>
                        <div className='SignUpInfoCmini'>
                        <p style={{alignSelf:'flex-start', fontSize:20 }} >state</p>
                        <input className='inputS' name='state' value={formData.state} onChange={onChangeForm} type="text"/>
                        </div>
                    </div>
                    
                    <div className='SignUpInfoR' >
                        <div className='SignUpInfoCmini'>
                        <p style={{alignSelf:'flex-start', fontSize:20 }} ></p>
                        <div className='inputS' style={{borderStyle:'none', width: 264}}></div>
                        </div>
                        <div className='SignUpInfoCmini' style={{alignSelf: 'flex-end'}}>
                        <p style={{alignSelf:'flex-start', fontSize:20 }} >zip</p>
                        <input className='inputS' name='zipcode' value={formData.zipcode} onChange={onChangeForm} type="text"/>
                        </div>
                    </div>
                </div>
            </div>
            <button className="inButton" style={{width: 450, height: 55, marginTop:-75, position:'relative'}} onClick={handleSubmit} >SignUp</button>
            <p className='loading' >{errors}</p>
        </div>
    );
}

export default Signup;
