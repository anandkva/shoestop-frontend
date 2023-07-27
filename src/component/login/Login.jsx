import React,{useContext, useState} from 'react'
import '../signup/signup.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { productContext } from '../contextAPI/Context'

const Login = () => {
    const navigate = useNavigate()
    const { token,setToken } = useContext(productContext)
    const [email, setMail] = useState('')
    const [password, setPassword] = useState('')
  
    const url = "http://localhost:5000/login"
 
    const changeMailHandler = (e) => {
        setMail(e.target.value)
    }
    const changePasswordHandler = (e) => {
        setPassword(e.target.value)
    }
  
    const submitHandler = () => {
      // console.log(name, mail, password)
      axios.post(url, { name, email, password })
      .then(res => {
          if (res.status === 200 || res.status === 201) {
            
              localStorage.setItem('token', res.data.token);
              console.log(res.data); 
              setToken(res.data.token)
              navigate('/home')
          } else {
              console.log('Request failed with status:', res.status);
          }
      })
  }
  
  
    return (
      <div className='signup'>
        <input type="text" placeholder='email' onChange={(e) => { changeMailHandler(e) }}/>
        <input type="password" placeholder='password'  onChange={(e) => { changePasswordHandler(e) }} />
        <button onClick={() => { submitHandler() }}>Login</button>
      </div>
    )
  }

export default Login