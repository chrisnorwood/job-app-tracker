import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

// This feels hacky, and the check ought to come from state instead
// having trouble with the fact it is async though
// TEMP DISABLED
// function tokenExists() {
//   return (localStorage.getItem('token')) ? true : false
// }

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isAuthenticated = useAuth()

  return (
    // If restricted=true and user is logged in, do not show the component
    <Route {...rest} render={props => (
      isAuthenticated && restricted
        ? <Redirect to='/apps' />
        : <Component {...props} />
    )}/>
  )
}

export default PublicRoute
