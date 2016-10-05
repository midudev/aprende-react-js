import React, { Component, PropTypes } from 'react'
import './Searcher.css'

import Button from './Button.js'

export default class Searcher extends Component {
  constructor (...args) {
    super(...args);
    this.state = {
      textToSearch: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({ textToSearch: e.currentTarget.value})
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.onSubmit(this.state.textToSearch)
  }

  render () {
    return (
      <form className='Searcher' onSubmit={this.handleSubmit}>
        <input
          disabled={this.props.isLoading}
          onChange={this.handleChange}
          placeholder='Find a character'
          type='text' />
        <Button
          isLoading={this.props.isLoading}
          label='Search'
          />
      </form>
    )
  }
}

Searcher.propTypes = {
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired
}

Searcher.defaultProps = {
  onSubmit: () => {}
}
