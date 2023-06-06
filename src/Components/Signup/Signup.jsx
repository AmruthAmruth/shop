import React, { useState } from 'react'
import './Signup.css'
import Firebase from '../../Firebase/Config'
import {useNavigate} from 'react-router-dom'
function Signup() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handilSubmit=(e)=>{
        e.preventDefault()
        Firebase.auth().createUserWithEmailAndPassword(email,password).catch((err) => {
            console.log("Erorr");
            alert("This Email Was Already In Use By Another Account")
          })
        .then((result)=>{
            result.user.updateProfile({displayName:name}).then(()=>{
                Firebase.firestore().collection("users").add({
                    id:result.user.uid,
                    name,
                    phone
                }).then(()=>{
                    navigate('/login')
                })
            })
        })

      
    }
    const move = () =>{
        navigate("/login")
    }
  return (
    <div className='signup'>
        <h3>Sign Up</h3>
      <div className="s-page">
         <form action="" onSubmit={handilSubmit}>
        <label htmlFor="">Enter Full Name</label> <br />
        <input type="text"
         value={name}
          onChange={(e)=>setName(e.target.value)}
           /> <br /> <br />
        <label htmlFor="">Enter Phone Number</label> <br /> 
        <input type="number"
         value={phone}
         onChange={(e)=>setPhone(e.target.value)}
         /> <br /> <br />
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
        <p>Have an account ? <span onClick={move}>Login</span></p>
      </div>
    </div>
  )
}

export default Signup
