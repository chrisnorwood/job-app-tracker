import React from 'react'
import { handleLogin } from '../../services/auth'

const Login = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const values = {
      email: event.target.email.value,
      password: event.target.password.value,
    }
    console.log('Form submitted with: ', values)

    handleLogin(values)
  }

  return (
    <div className='auth-box'>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label>Email</label>
          <input type="text" name="email" placeholder="foo@bar.com" />
        </div>
        <div className='form-field'>
          <label>Password</label>
          <input type="password" name="password" placeholder="foobar" />
        </div>
        <div>
          <input type="submit" value="Login" className="submit-btn"/>
        </div>
      </form>
    </div>
  )
}

export default Login
