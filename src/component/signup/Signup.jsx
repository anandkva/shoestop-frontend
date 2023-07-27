import React,{useState} from 'react'
import './signup.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setMail] = useState('')
  const [password, setPassword] = useState('')

  const url = "http://localhost:5000/signup"

  const changeNameHandler = (e) => {
      setName(e.target.value)
  }
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
            localStorage.setItem('token', JSON.stringify(res.data.token));
            console.log(res.data); // Log the response data if the request was successful.
            navigate('/')
        } else {
            console.log('Request failed with status:', res.status);
        }
    })
}


  return (
    <div className='signup'>
      <input type="text" placeholder='username' onChange={(e) => { changeNameHandler(e) }}/>
      <input type="text" placeholder='email' onChange={(e) => { changeMailHandler(e) }}/>
      <input type="password" placeholder='password'  onChange={(e) => { changePasswordHandler(e) }} />
      <button onClick={() => { submitHandler() }}>SignUp</button>
    </div>
  )
}

export default Signup