import React, { Component, PropTypes } from 'react'
import { AnonymousMenu, LoggedInMenu } from '../components'

export default class Home extends Component {
  render () {
    return (
      <div>
        {this.context.user ? <LoggedInMenu /> : <AnonymousMenu />}
      </div>
    )
  }
}

Home.contextTypes = {
  user: PropTypes.object
}
