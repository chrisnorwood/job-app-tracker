import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (props) => (
  <nav>
    <div className='container'>
      <h3>Job App. Tracker</h3>
      <ul>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)

export default Nav