import React, { Component } from 'react';

export default class LifeCycleDemo extends Component {

  constructor (...args) {
    super(...args);

    this.changeState = this.changeState.bind(this);

    this.state = {
      mensaje: this.props.initialMessage
    };

    console.log('<LifeCycleDemo> constructor');
  }

  componentWillMount () {
    console.log('<LifeCycleDemo> componentWillMount');
  }

  componentDidMount () {
    console.log('<LifeCycleDemo> componentDidMount');
    /*this.interval = setInterval(() => {
      this.setState({ mensaje: Date.now() })
      // console.log('Hola EscuelaIT!')
    }, 100)*/
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('<LifeCycleDemo> shouldComponentUpdate');
    console.log('actualProps', this.props.sizeMessage)
    console.log('nextProps', nextProps.sizeMessage)
    return true;
    // return this.props.sizeMessage !== nextProps.sizeMessage
  }

  componentWillReceiveProps (nextProps) {
    console.log('<LifeCycleDemo> componentWillReceiveProps', nextProps);
  }

  componentWillUpdate () {
    console.log('<LifeCycleDemo> componentWillUpdate');
  }

  componentDidUpdate () {
    console.log('<LifeCycleDemo> componentDidUpdate');
  }

  componentWillUnmount () {
    console.log('<LifeCycleDemo> componentWillUnmount');
    // clearInterval(this.interval)
  }

  changeState () {
    this.setState({ mensaje: 'Mensaje actualizado!' })
  }

  render () {
    console.log('<LifeCycleDemo> render')
    return (
      <div>
        <h1>Life Cycle Demo</h1>
        <p><strong>State: </strong><code>{JSON.stringify(this.state)}</code></p>
        <p><strong>Props: </strong><code>{JSON.stringify(this.props)}</code></p>
        <button onClick={this.changeState}>Change component state</button>
      </div>
    );
  }
}
