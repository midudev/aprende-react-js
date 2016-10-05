import React, { Component } from 'react';
import lscache from 'lscache'

import './App.css';

import Card from './Card/Card.js'
import Logo from './Logo.js'
import Searcher from './Searcher.js'

const API_URL = 'http://gateway.marvel.com:80/v1/public'
const APIKEY_QUERYSTRING = 'apikey=408b6d7a1fd0560193bf0a239d279af1'

export default class App extends Component {

  constructor (...args) {
    super(...args)
    this.state = {
      initialState: true,
      isLoading: false,
      favs: [],
      results: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    const favs = lscache.get('favs') || []
    this.setState({ favs: favs })
  }

  handleSubmit (textToSearch) {
    this.setState({ initialState: false, isLoading: true });

    const FETCH_URL = `${API_URL}/characters?nameStartsWith=${textToSearch}&${APIKEY_QUERYSTRING}`

    console.log(FETCH_URL)

    fetch(FETCH_URL)
      .then(res => res.json())
      .then(res => {
        this.setState({ isLoading: false, results: res.data.results })
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div className='container'>
        <Logo isCentered />

        <Searcher
          isLoading={this.state.isLoading}
          onSubmit={this.handleSubmit}
        />

        {this.state.initialState &&
          <p className='has-text-centered'>Por favor, usa el formulario para buscar el personaje</p>}

        <div className='results'>
          {this.state.results.map(item => {
            return (
              <Card
                isFav={this.state.favs.some(id => item.id === id)}
                item={item}
                key={item.id} />
            )
          })}
        </div>
      </div>
    );
  }
}
