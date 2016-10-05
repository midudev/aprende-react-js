import React, { Component } from 'react'
import Button from './Button.js'

import './Searcher.css'

export default class Searcher extends Component {

  constructor (...args) {
    super(...args)
    this.state = {
      textToSearch : ''
    }
    this.handleChangeText = this.handleChangeText.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeText (e) {
    const { value } = e.currentTarget
    this.setState({textToSearch: value})
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.onClickButton(this.state.textToSearch)
  }

  render () {
    return (
      <form className='Searcher' onSubmit={this.handleSubmit}>
        <input
          disabled={this.props.isLoading}
          className="input"
          onChange={this.handleChangeText}
          placeholder='Find a character'
          type="text"
        />
        <Button
          isLoading={this.props.isLoading}
          label='Search'
          onClick={this.handleSubmit}
        />
      </form>
    )
  }
}
