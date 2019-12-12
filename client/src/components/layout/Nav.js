import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = (props) => (
  <nav>
    <div className='container'>
      <h2>
        <Link to='/'>Job Application Tracker</Link>
      </h2>
      <ul>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)

export default Nav