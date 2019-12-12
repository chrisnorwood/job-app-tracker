import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../contexts/AuthContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authState } = useAuth()
  const token = localStorage.getItem('token')

  return (
    // Show the component only when the user is logged in
    // Otherwise redirect to /login
    <Route {...rest} render={props => (
      !authState.isAuthenticated && !token
        ? toast.warn('You must be logged in to view that page.', { position: 'bottom-right'}) && <Redirect to='/login' />
        : <Component {...props} />
    )}/>
  )
}

export default PrivateRoute
