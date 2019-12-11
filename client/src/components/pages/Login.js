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
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>email:</label>
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div>
          <label>password:</label>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </>
  )
}

export default Login
