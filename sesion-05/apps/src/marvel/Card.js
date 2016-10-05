import React, { Component } from 'react'
import lscache from 'lscache'

import './Card.css'

import IconStarOutline from 'react-icons/lib/md/star-outline'
import IconStartFull from 'react-icons/lib/md/star'

export default class Card extends Component {

  constructor (...args) {
    super(...args)
    this.state = {
      isFav: this.props.isFav
    }
  }

  addFav () {
    this.setState({isFav: true})
    this.saveToLocalStorage(this.props.id)
  }

  removeFav () {
    this.setState({isFav: false})
    this.saveToLocalStorage(this.props.id)
  }

  saveToLocalStorage (value) {
    let favs = lscache.get('favs') || []
    const index = favs.indexOf(value)
    if (favs.length === 0 || index < 0) {
      favs.push(value)
    } else {
      favs.splice(index, 1)
    }
    lscache.set('favs', favs)
  }

  render () {
    return (
      <div className="card">
        {this.state.isFav
          ? <IconStartFull onClick={this.removeFav.bind(this)} />
          : <IconStarOutline onClick={this.addFav.bind(this)} />
        }
        <img className='card-image' src={this.props.image} alt={this.props.title} />
        <div className="card-content">
          <h3 className='card-title'>{this.props.title}</h3>
          <p className='card-description'>
            {this.props.content}
          </p>
        </div>
      </div>
    );
  }
}
