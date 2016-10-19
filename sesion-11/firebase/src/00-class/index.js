import React, { Component } from 'react';
import firebase from 'firebase';

import { Button, TextInput } from 'belle';

// Initialize config
const config = {
  apiKey: "AIzaSyCDSe8b7MHPFGFHkeJW9JJ2x8SUGIupD14",
  authDomain: "react-escuela-it-firebase.firebaseapp.com",
  databaseURL: "https://react-escuela-it-firebase.firebaseio.com",
  storageBucket: "react-escuela-it-firebase.appspot.com",
  messagingSenderId: "591869958167"
};

firebase.initializeApp(config)
const firebaseDBRef = firebase.database().ref()
const messagesRef = firebaseDBRef.child('messages')

export default class _00 extends Component {

  constructor (...args) {
    super(...args)
    this.state = { name: '', inputMessage: '', messages: {}, user: null }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user === null) {
        firebase.auth().signInAnonymously()
      }
      this.setState({user})
    })

    messagesRef.orderByKey().once('value', (snapshot) => {
      if (snapshot.val() !== null) {
        this.setState({ messages: snapshot.val() })
      }
    })

    messagesRef.orderByKey().limitToLast(1).on('child_added', snapshot => {
      const newMessage = { [snapshot.key]: snapshot.val() }
      const messages = Object.assign( {}, this.state.messages, newMessage )
      this.setState({messages})
    })
  }

  handleChange ({value}) {
    this.setState({ inputMessage: value})
  }

  handleClick (e) {
    const message = {
      user: this.state.user.uid,
      content: this.state.inputMessage
    }

    messagesRef.push(message)
    this.setState({ inputMessage: ''})
  }

  renderMessages () {
    const arrayOfKeys = Object.keys(this.state.messages)
    return (
      <div>
        {arrayOfKeys.map(key => {
          const msg = this.state.messages[key]
          let className = 'message'
          className += msg.user === this.state.user.uid ? ' is-mine' : ''
          return (
            <div className={className} key={key}>
              <p>{msg.content}<small>Escrito por {msg.user}</small></p>
            </div>)
        })}
      </div>
    )
  }

  render () {
    return (
      <div>
        {
          this.state.user &&
            <h3>Hola, soy {this.state.user.uid}</h3>
        }
        <TextInput
          placeholder='Nueva mensaje'
          onUpdate={this.handleChange}
          type='text'
          value={this.state.inputMessage}
        />
        <Button onClick={this.handleClick}>Guardar Mensaje</Button>
        {this.renderMessages()}
      </div>
    );
  }
}
