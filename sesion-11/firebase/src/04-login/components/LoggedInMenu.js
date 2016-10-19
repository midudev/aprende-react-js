import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const LoggedInMenu = (props, context) => {

  const signOut = () => {
    context.firebase.auth().signOut().then(function() {
      console.log('Signed Out');
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  }

  return (
    <ul>
      <li>
        <Link to='/user'>User Profile</Link>
      </li>
      <li>
        <button onClick={signOut}>Sign Out</button>
      </li>
    </ul>
  )
}

LoggedInMenu.contextTypes = {
  firebase: PropTypes.object
}

export default LoggedInMenu
