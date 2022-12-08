import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [inputs,setInputs]=useState({
        username:"",
        email:"",
        password:""

    })
const handleChange =(e)=>{

}

    return (
        <div className='auth'>
            <h1>Register</h1>
            <form>
    <input required type="text" placeholder='username' onChange={handleChange} />
    <input required type="email" placeholder='email' onChange={handleChange}/>
    <input required type="password" placeholder='password' onChange={handleChange} />
    <button>Register</button>
    <p>This is an Error !</p>
    <span> Do you have an account ? <Link to="/login">Login</Link></span>
     </form>
        </div>
  )
}

export default Register
//Register jawha behyy kamelet khdemtha.