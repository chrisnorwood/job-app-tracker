import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { authState } = useAuth()

  return (
    // If restricted=true and user is logged in, do not show the component
    <Route {...rest} render={props => (
      authState.isAuthenticated && restricted
        ? <Redirect to='/apps' />
        : <Component {...props} />
    )}/>
  )
}

export default PublicRoute
