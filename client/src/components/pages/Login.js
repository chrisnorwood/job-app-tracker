import React from 'react'
import useForm from 'react-hook-form'
import { useAuth } from '../../contexts/AuthContext'
import { handleLogin } from '../../services/auth'

const Login = ({ history }) => {
  const { dispatch } = useAuth()
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = async data => {
    console.log('Form submitted with: ', data)
    try {
      const loginResponse = await handleLogin(data)
      console.log('success in login: ', loginResponse)
      dispatch({
        type: 'LOGIN',
        payload: loginResponse,
      })
      history.push('/apps')
    } catch (error) {
      // Do nothing, handled in auth service
    }
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
