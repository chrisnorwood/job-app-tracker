import React from 'react'
import useForm from 'react-hook-form'
import { handleLogin } from '../../services/auth'

const Login = (props) => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    console.log('Form submitted with: ', data)
    handleLogin(data)
  }

  return (
    <div className='auth-box'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-field'>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="foo@bar.com"
            ref={register({ required: true })}
          />
          <div className="auth-error">
            {errors.email && 'Email is required.'}
          </div>
        </div>
        <div className='form-field'>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="foobar"
            ref={register({ required: true })}
          />
          <div className="auth-error">
            {errors.password && 'Password is required.'}
          </div>
        </div>
        <div>
          <input type="submit" value="Login" className="submit-btn"/>
        </div>
      </form>
    </div>
  )
}

export default Login
