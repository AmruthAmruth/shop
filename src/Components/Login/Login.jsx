import React, { useState } from 'react'
import './Login.css'
import Firebase from '../../Firebase/Config'
import {useNavigate} from 'react-router-dom'
function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const loginSubmit=(e)=>{
    e.preventDefault()
    Firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      navigate("/")
    }).catch((error)=>{
      alert("The Email And Password Doesn't Mach")
    })
  }
 const move = ()=>{
  navigate("/")
 }
  return (
    <div className='login'>
        <h3>Login</h3>
      <div className="l-page">
        <form action="" onSubmit={loginSubmit}>
        <label htmlFor="">Enter Email Address</label> <br />
        <input type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        /> <br /> <br />
        <label htmlFor="">Enter Password</label> <br />
        <input type="password"
         value={password}
         onChange={(e)=>setPassword(e.target.value)} 
        /> <br /> <br />
        <button>Sing Up</button> <br /> <br />
        </form>
        <p>Create a new account ? <span onClick={move}>Singup</span></p>
      </div>
    </div>
  )
}

export default Login
