import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const register = () => {}
  const loginToApp = (e) => {
    e.preventDefault()
  }
  return (
    <div className='login'>
      <img
        value={password}
        onChange={(e) => setName(e.target.value)}
        src='https://content.linkedin.com/content/dam/me/brand/en-us/brand-home/logos/01-dsk-e8-v2.png.original.png'
        alt=''
      />
      <form>
        <input type='text' placeholder='full name (required if registering)' />
        <input type='text' placeholder='Profile pic URL (optional)' />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='Email'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
        />
        <button type='submit' onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{' '}
        <span className='login_register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  )
}

export default Login
