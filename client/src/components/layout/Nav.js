import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const Nav = (props) => {
  const { authState, dispatch } = useAuth();

  return (
    <nav>
    <div className='container'>
      <h2>
        <Link to='/'>Job Application Tracker</Link>
      </h2>
      <ul>
        { authState.isAuthenticated ? (
          <>
            <li>
              <NavLink to='/apps'>My Apps</NavLink>
            </li>
            <li>
              <NavLink to='/logout'>Logout</NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to='/signup'>Signup</NavLink>
            </li>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  </nav>
  )
}

export default Nav
