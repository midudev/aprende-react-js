import React, { Component } from 'react';

import LifeCycleDemo from './life-cycle';
import DynamicChildrenDemo from './dynamic-children'
import NestingViewsDemo from './nesting-views';
import EncapsulatingLibrariesDemo from './encapsulating-libraries'

import './App.css'

export default class App extends Component {
  constructor (...args) {
    super(...args);

    this.changeDemo = this.changeDemo.bind(this);

    this.state = {
      demoToLoad : 'LifeCycleDemo'
    }
  }

  changeDemo (demoToLoad) {
    return () => { // arrow function to bind this context
      this.setState({ demoToLoad });
    }
  }

  render () {
    const {demoToLoad} = this.state;

    return (
      <div>

        <header>
          <button
            className={demoToLoad === 'LifeCycleDemo' ? 'active' : ''}
            onClick={this.changeDemo('LifeCycleDemo')}>LifeCycleDemo</button>
          <button
            className={demoToLoad === 'DynamicChildrenDemo' ? 'active' : ''}
            onClick={this.changeDemo('DynamicChildrenDemo')}>DynamicChildrenDemo</button>
          <button
            className={demoToLoad === 'NestingViewsDemo' ? 'active' : ''}
            onClick={this.changeDemo('NestingViewsDemo')}>NestingViewsDemo</button>
          <button
            className={demoToLoad === 'EncapsulatingLibrariesDemo' ? 'active' : ''}
            onClick={this.changeDemo('EncapsulatingLibrariesDemo')}>EncapsulatingLibrariesDemo</button>
        </header>

        {(demoToLoad === 'LifeCycleDemo') && <LifeCycleDemo initialMessage='Hola mundo' sizeMessage={12} />}

        {(demoToLoad === 'DynamicChildrenDemo') && <DynamicChildrenDemo initialShow={true} />}

        {(demoToLoad === 'NestingViewsDemo') && <NestingViewsDemo />}

        {(demoToLoad === 'EncapsulatingLibrariesDemo') && <EncapsulatingLibrariesDemo />}

      </div>
    )
  }
}
