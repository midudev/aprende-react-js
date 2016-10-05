import React, { Component } from 'react';
import Card from './Card.js'
import Searcher from './Searcher.js'
import ResultMessage from './ResultMessage.js'
import Logo from './Logo.js'

import lscache from 'lscache'

import './App.css';

const API_URL = 'http://gateway.marvel.com:80/v1/public/'
const APIKEY_QUERYSTRING = 'apikey=408b6d7a1fd0560193bf0a239d279af1'

class App extends Component {

  constructor (...args) {
    super(...args)
    this.state = {
      errorMessage: false,
      favs: [],
      initialState: true,
      isLoading: false,
      results: [],
      showContainer: false,
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  componentDidMount () {
    const favs = lscache.get('favs') || []
    this.setState({ favs: favs })
  }

  handleButtonClick (textToSearch) {
    this.setState({ initialState: false, errorMessage: false, isLoading: true })

    let FETCH_URL = `${API_URL}characters?${APIKEY_QUERYSTRING}&`
    FETCH_URL += textToSearch ? `nameStartsWith=${textToSearch}` : ''

    fetch(FETCH_URL)
      .then(res => res.json())
      .then(res => {
        console.log(res.data.results)
        this.setState({isLoading: false, results: res.data.results})
      })
      .catch(() => {
        this.setState({isLoading: false, results: []})
      })
  }

  render () {
    return (
      <div className='container'>
        <Logo />
        <Searcher
          isLoading={this.state.isLoading}
          onClickButton={this.handleButtonClick}
        />

        {this.state.initialState &&
          <ResultMessage
            label='¡Use the input above to search for a character!'
            isCentered />
        }

        {this.state.errorMessage &&
          <p className='has-text-centered'>
            Character name is not valid. Try another one!
          </p>
        }

        <div className='results'>
          {this.state.results.map((character) => {
            const image = `${character.thumbnail.path}.${character.thumbnail.extension}`
            const isFav = this.state.favs.find(id => character.id === id)
            return (
              <Card
                isFav={isFav}
                id={character.id}
                key={character.id}
                title={character.name}
                content={character.description}
                image={image} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
