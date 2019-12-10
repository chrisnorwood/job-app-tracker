import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../contexts/AuthContext'

// This feels hacky, and the check ought to come from state instead
// having trouble with the fact it is async though
// TEMP DISABLED
// function tokenExists() {
//   return (localStorage.getItem('token')) ? true : false
// }

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useAuth()

  return (
    // Show the component only when the user is logged in
    // Otherwise redirect to /login
    <Route {...rest} render={props => (
      !isAuthenticated
        ? toast.warn('You must be logged in to view that page.', { position: 'top-center'}) && <Redirect to='/login' />
        : <Component {...props} />
    )}/>
  )
}

export default PrivateRoute
