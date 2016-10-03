import React, { Component } from 'react';

function Item (props) {
  return <li><a href={`#${props.link}`}>{props.text}</a></li>
}

function List (props) {
  return (
    <div>
      <ul>{props.children}</ul>
      <span>Number of items: {props.children.length}</span>
    </div>
  )
}

/*
function Article (props) {
  return (
    <article>
      <h4>{props.title}</h4>
      {props.children}
    </article>
  )
}*/

export default class NestingViewsDemo extends Component {
  render () {
    return (
      <div>
        <h1>Nesting Views Demo</h1>
        <ul>
          <li><a href='#1'>Item 1</a></li>
          <li><a href='#2'>Item 2</a></li>
          <li><a href='#3'>Item 3</a></li>
          <li><a href='#4'>Item 4</a></li>
        </ul>

        {/*
        <List>
          <Item link='1' text='Item 1' />
          <Item link='2' text='Item 2' />
          <Item link='3' text='Item 3' />
          <Item link='4' text='Item 4' />
        </List>

        <Article title='Título del Artículo'>
          <p>En un lugar de la mancha, de cuyo nombre no quiero acordarme...</p>
          <p>Vivía un joven emponzoñado de whisky que exhíbia una figurota peculiar</p>
        </Article>
        */}
      </div>
    );
  }
}
