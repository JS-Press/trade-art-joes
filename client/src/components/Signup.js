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
                <div className='SignUpInfoR'>
                        <div className='SignUpInfoCmini' style={{marginRight:50}}>
                        <p>username</p>
                        <input className='inputS' name='username' value={formData.username} onChange={onChangeForm} type="text"/>
                        </div>
                        <div className='SignUpInfoCmini'>
                        <p>email</p>
                        <input className='inputS' name='email' value={formData.email} onChange={onChangeForm} type="text"/>
                        </div>
                    </div>
                    <br></br>
                    <div className='SignUpInfoR'>
                        <div className='SignUpInfoCmini' style={{marginRight:50}}>
                            <p>first name</p>
                            <input className='inputS' name='first_name' value={formData.first_name} onChange={onChangeForm} type="text"/>
                        </div>
                        <div className='SignUpInfoCmini'>
                            <p>last name</p>
                            <input className='inputS' name='last_name' value={formData.last_name} onChange={onChangeForm} type="text"/>
                        </div>
                    </div>
                    <br></br>
                    <div className='SignUpInfoR'>
                        <div className='SignUpInfoCmini' style={{marginRight:50}}>
                        <p>password</p>
                        <input className='inputS' name='password_digest' value={formData.password_digest} onChange={onChangeForm} type="password"/>
                        </div>
                        <div className='SignUpInfoCmini'>
                        <p>confirm password</p>
                        <input className='inputS' name='password_confirmation' value={formData.password_confirmation} onChange={onChangeForm} type="password"/>
                        </div>
                    </div>
                    <br></br>
                    <div className='SignUpInfoR'>
                        <div className='SignUpInfoCmini' style={{marginRight:50}}>
                        <p>profile pic link</p>
                        <input className='inputS' name='profile_pic' value={formData.profile_pic} onChange={onChangeForm} type="text"/>
                        </div>
                        <div className='SignUpInfoCmini'>
                        <p></p>
                        <div className='inputS' style={{borderStyle:'none'}}></div>
                        </div>
                    </div>
                    </div>
                <div className='SignUpInfoC'>
                    <p>bio</p>
                    <input className='inputS' name='bio' value={formData.bio} onChange={onChangeForm} type="text"/>
                    <br></br>
                    <div className='SignUpInfoR'>
                        <div className='SignUpInfoCmini' style={{marginRight:50}}>
                        <p>mailing address</p>
                        <input className='inputS' name='address' value={formData.address} onChange={onChangeForm} type="text"/>
                        </div>
                        <div className='SignUpInfoCmini'>
                        <p>city</p>
                        <input className='inputS' name='city' value={formData.city} onChange={onChangeForm} type="text"/>
                        </div>
                    </div>
                    <br></br>
                    <div className='SignUpInfoR'>
                        <div className='SignUpInfoCmini' style={{marginRight:50}}>
                        <p>state</p>
                        <input className='inputS' name='state' value={formData.state} onChange={onChangeForm} type="text"/>
                        </div>
                        <div className='SignUpInfoCmini'>
                        <p>zipcode</p>
                        <input className='inputS' name='zipcode' value={formData.zipcode} onChange={onChangeForm} type="text"/>
                        </div>
                    </div>
                    <br></br>
                    <div className='SignUpInfoR' >
                        <div className='SignUpInfoCmini'>
                        <p></p>
                        <div className='inputS' style={{borderStyle:'none', width: 264}}></div>
                        </div>
                        <div className='SignUpInfoCmini' style={{alignSelf: 'flex-end'}}>
                        <p>art site</p>
                        <input className='inputS' name='website' value={formData.website} onChange={onChangeForm} type="text"/>
                        </div>
                    </div>
                </div>
            </div>
            <button className="inButton" style={{width: 450, height: 55, marginTop:-75, position:'relative'}} >SignUp</button>
            <p className='loading' >{errors}</p>
        </div>
    );
}

export default Signup;
