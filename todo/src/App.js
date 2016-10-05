import React from 'react';
import TodoList from './TodoList.js'
import lscache from 'lscache'

export default class App extends React.Component {

  constructor(...args) {
    super(...args);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: [], text: ''};
  }

  componentDidMount () {
    const items = lscache.get('todo-items') || []
    console.log('componentDidMount, items:', items)
    this.setState({ items: items })
  }

  render () {
    return (
      <div>
        <h3>LISTA TAREAS</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };

    this.setState((prevState) => {
      const items = prevState.items.concat(newItem)
      lscache.set('todo-items', items)
      return {
        items: items,
        text: ''
      }
    });
  }
}
