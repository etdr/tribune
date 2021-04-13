import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'


export default function Auth (props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit (event) {
    event.preventDefault()

    const result = await (await fetch('http://localhost:3110/u/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email,
          password
        }
      })
    })).json()

    localStorage.setItem('token', result.token)
    localStorage.setItem('email', result.user.email)
    localStorage.setItem('role', result.user.role)

    props.setEmail(result.user.email)
    props.setAdmin(result.user.role === 'admin')
    props.setToken(result.token)
  }

  if (props.token) return <Redirect to="/admin" />

  return (
    <form id="auth-form" className="poster" onSubmit={handleSubmit}>
      <h3>Log In</h3>

      <div className="poster-field p-field1">
        <p className="p-field-title">Email</p>
        <p className="p-field-subtitle">it's your work email</p>
      </div>
      <input className="poster-input p-input1" value={email} onChange={e => setEmail(e.target.value)} />

      <div className="poster-field p-field2">
        <p className="p-field-title">Password</p>
        <p className="p-field-subtitle">if you forgot let Eli know</p>
      </div>
      <input className="poster-input p-input2" value={password} onChange={e => setPassword(e.target.value)} />

      <button className="p-input3 submit-button">Submit</button>
    </form>
  )
}