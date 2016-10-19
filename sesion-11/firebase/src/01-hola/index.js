import React, { Component } from 'react';
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
const firebaseDBRef = firebase.database().ref()
const nameRef = firebaseDBRef.child('name')

export default class _01 extends Component {
  constructor (...args) {
    super(...args);
    this.state = { name: '' }
  }

  componentDidMount () {
    nameRef.on('value', snapshot => {
      this.setState({
        name: snapshot.val()
      })
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
