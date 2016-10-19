import React, { Component, PropTypes } from 'react';
import { Router, Route, browserHistory } from 'react-router'
import { Home, Login, Signup, NoMatch } from './pages'

import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBnoq3ZGEQn1iJPeKKlKoFSTnDrfvKb51U",
  authDomain: "react-firebase-52d46.firebaseapp.com",
  databaseURL: "https://react-firebase-52d46.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "338218715052"
};

firebase.initializeApp(config)

export default class _04 extends Component {
  constructor (...args) {
    super(...args);
    this.state = { user: null }
  }

  getChildContext () {
    return {
      firebase: firebase,
      user: this.state.user
    }
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({user}, () => {
        browserHistory.push('/')
      })
    });
  }

  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="*" component={NoMatch} />
      </Router>
    )
  }
}

_04.childContextTypes = {
  firebase: PropTypes.object,
  user: PropTypes.object
}
