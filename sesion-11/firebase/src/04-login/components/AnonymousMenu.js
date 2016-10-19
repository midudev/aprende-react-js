import React from 'react'
import { Link } from 'react-router'

const AnonymousMenu = () => (
  <ul>
    <li>
      <Link to='/signup'>Sign up</Link>
    </li>
    <li>
      <Link to='/login'>Log in</Link>
    </li>
  </ul>
)

export default AnonymousMenu
