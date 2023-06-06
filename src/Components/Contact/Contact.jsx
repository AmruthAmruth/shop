import React, { useState } from 'react'
import './Contact.css'
import Firebase from '../../Firebase/Config'
function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [massage, setMassage] = useState('')

const handilSubmit=(e)=>{
  e.preventDefault()
  Firebase.firestore().collection('contact').add({
    name,
    phone,
    email,
    massage
  })
}

  return (
    <div className='contact-full'>
      <div className="head">
      <h2>Contact us</h2>
      <div className="c-page">
        <form action="" onClick={handilSubmit}>
       <label htmlFor="">Full Name</label> <br />
       <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} /> <br />
       <label htmlFor="">Phone Number</label> <br />
       <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} /> <br />
       <label htmlFor="">Email Address</label> <br />
       <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  /> <br />
       <label htmlFor="">Massage</label> <br />
       <textarea name="" id="" cols="30" rows="5" value={massage} onChange={(e)=>setMassage(e.target.value)}></textarea> <br />
       <button type='submit'>Submit</button>
       </form>
       </div>
       </div>
    </div>
  )
}

export default Contact
