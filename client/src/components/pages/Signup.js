import React from 'react'
import useForm from 'react-hook-form'
import { useAuth } from '../../contexts/AuthContext'
import { handleSignup } from '../../services/auth'

const Signup = ({ history }) => {
  const { dispatch } = useAuth()
  const { register, handleSubmit, errors, watch } = useForm()

  const onSubmit = async data => {
    try {
      const signupResponse = await handleSignup(data)
      dispatch({
        type: 'LOGIN',
        payload: signupResponse,
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
        <div className='form-field'>
          <label>Password Confirmation</label>
          <input
            type="password"
            name="passwordConf"
            placeholder="foobar"
            ref={register({
              validate: (value) => {
                return value === watch('password')
              }
            })}
          />
          <div className="auth-error">
            {errors.passwordConf && 'Passwords must match.'}
          </div>
        </div>
        <div>
          <input type="submit" value="Signup" className="submit-btn"/>
        </div>
      </form>
    </div>
  )
}

export default Signup
