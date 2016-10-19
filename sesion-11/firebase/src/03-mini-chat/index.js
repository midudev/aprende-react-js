import React, { Component } from 'react';
import firebase from 'firebase'

import {Button, TextInput} from 'belle'

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
const messagesRef = firebaseDBRef.child('messages')

export default class _03 extends Component {
  constructor (...args) {
    super(...args);
    this.state = { name: '', inputMessage: '', user: null, messages: {}, gotFirstMessages: false }
    this.handleChange = this.handleChange.bind(this)
    this.saveMessage = this.saveMessage.bind(this)
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user === null) {
        firebase.auth().signInAnonymously()
      }
      this.setState({user})
    });

    messagesRef.orderByKey().once('value', snapshot => {
      const messages = snapshot.val()
      this.setState({
        gotFirstMessages: true,
        messages
      })

      const messagesKeys = Object.keys(messages)
      const lastItem = messagesKeys.slice(-1)[0]

      messagesRef.orderByKey().startAt(lastItem).on('child_added', snapshot => {
        const newMessage = { [snapshot.key] : snapshot.val() }
        const messages = Object.assign( {}, this.state.messages, newMessage)
        this.setState({messages})
      })
    })
  }

  handleChange ({value}) {
    this.setState({ inputMessage: value })
  }

  saveMessage (e) {
    e.preventDefault()

    const message = {
      user: this.state.user.uid,
      content: this.state.inputMessage
    }

    messagesRef.push(message)
    this.setState({inputMessage: ''})
  }

  renderMessages () {
    const arrayOfKeys = Object.keys(this.state.messages)
    return (
      <div>
        {arrayOfKeys.map(key => {
          const msg = this.state.messages[key]
          const isMine = this.state.user && msg.user === this.state.user.uid
          let className = 'message'
          className += isMine ? ' is-mine' : ''

          return (
            <div className={className} key={key}>
              <p>{msg.content}<small>Escrito por {msg.user}</small></p>

            </div>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.state.user &&
          <h3>Logged as: {this.state.user.uid}</h3>
        }
        <form onSubmit={this.saveMessage}>
          <TextInput
            onUpdate={this.handleChange}
            type='text'
            value={this.state.inputMessage} />
          <Button type='submit'>Send message!</Button>
        </form>
        {this.renderMessages()}
      </div>
    );
  }
}
