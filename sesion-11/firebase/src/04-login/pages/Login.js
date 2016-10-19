import React, { PropTypes } from 'react'

const Login = (props, context) => {
  let inputEmail, inputPassword

  const handleSubmit = (evt) => {
    const email = inputEmail.value
    const password = inputPassword.value
    context.firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
      // Handle Errors here.
      console.log(error.message)
    })
    evt.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Log in using your email and password</legend>
        <p>
          <label>Email</label>
          <input ref={node => inputEmail = node} type='text' />
        </p>
        <p>
          <label>Password</label>
          <input ref={node => inputPassword = node} type='password' />
        </p>
      </fieldset>
      <button type='submit'>Log In</button>
    </form>
  )
}

Login.contextTypes = {
  firebase: PropTypes.object
}

export default Login
