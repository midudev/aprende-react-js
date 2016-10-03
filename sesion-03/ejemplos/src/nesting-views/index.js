import React, { Component } from 'react';


function Item (props) {
  console.log('Item prop show', props.show)
  return <li><a href={`#${props.link}`}>{props.text}</a></li>
}

function List (props) {
  console.log('List prop show', props.show)
  return (
    <div>
      <ul className='list'>{props.children}</ul>
      {props.children && <span>Number of items: {props.children.length}</span>}
    </div>
  )
}

function Article (props) {
  return (
    <article>
      <header>
        <h4>{props.title}</h4>
        {props.timeago && <span>{props.timeago}</span>}
      </header>
      {props.children}
    </article>
  )
}

export default class NestingViewsDemo extends Component {
  render () {
    return (
      <div>
        <h1>Nesting Views Demo</h1>

        <List show={false}>
          <Item link='1' text='Item 1' show={true} />
          <Item link='2' text='Item 2' />
          <Item link='3' text='Item 3' />
          <Item link='4' text='Item 4' />
        </List>

        <Article title='Título del Artículo' timeago='Hace dos segundos'>
          <p>En un lugar de la mancha, de cuyo nombre no quiero acordarme...</p>
          <p>Vivía un joven emponzoñado de whisky que exhíbia una figurota peculiar</p>
        </Article>

      </div>
    );
  }
}
