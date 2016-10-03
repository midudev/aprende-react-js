import React, { Component } from 'react';
import Timeago from './Timeago.js';

/*
function RadioButton (props) {
  return (
    <label>
      <input
        checked={props.selectedDate === props.date}
        type='radio'
        value={props.date}
        onChange={props.onChange} />
        {props.date}
    </label>)
}

<RadioButton
  date='2016-10-01'
  selectedDate={this.state.date}
  onChange={this.handleChange} />
*/

export default class EncapsulatingLibrariesDemo extends Component {
  constructor (...args) {
    super(...args)
    const now = Date.now()
    this.state = { date: now }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({ date: e.target.value})
  }

  render () {
    return (
      <div>
        <h1>Encapsulating Libraries Demo</h1>
        <h3>Encapsulated moment.js library to Timeago component</h3>

        <div>
          <label>
            <input
              checked={this.state.date === '2016-10-01'}
              type='radio'
              value='2016-10-01'
              onChange={this.handleChange} />
            2016-10-01
          </label>
          <label>
            <input
              checked={this.state.date === '2016-02-12'}
              type='radio'
              value='2016-02-12'
              onChange={this.handleChange} />
            2016-02-12
          </label>
          <label>
            <input
              checked={this.state.date === '2014-06-03'}
              type='radio'
              value='2014-06-03'
              onChange={this.handleChange} />
            2014-06-03
          </label>
        </div>
        <Timeago date={this.state.date}/>
      </div>
    );
  }
}
