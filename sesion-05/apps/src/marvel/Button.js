import React from 'react'
import Spinner from 'react-spinkit'

export default function Button (props) {
  let className = 'button'
  className += props.isLoading ? ' is-loading' : ''

  return (
    <button className={className} onClick={props.onClick}>
      {props.isLoading ? <Spinner spinnerName="circle" noFadeIn /> : props.label}
    </button>
  )
}
