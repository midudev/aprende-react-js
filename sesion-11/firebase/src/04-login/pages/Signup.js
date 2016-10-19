import React, { PropTypes } from 'react'

const Signup = (props, context) => {
  let inputEmail, inputPassword

  const handleSubmit = (evt) => {
    const email = inputEmail.value
    const password = inputPassword.value
    context.firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User registered')
      })
      .catch((error) => {
      // Handle Errors here.
      console.log(error.message)

    })
    evt.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Create a new user choosing an email and password</legend>
          <p>
            <label>Email</label>
            <input ref={node => inputEmail = node} type='text' />
          </p>
          <p>
            <label>Password</label>
            <input ref={node => inputPassword = node} type='password' />
          </p>
        </fieldset>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}
export default Signup

Signup.contextTypes = {
  firebase: PropTypes.object
}
