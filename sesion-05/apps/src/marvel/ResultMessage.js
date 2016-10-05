import React from 'react'

export default function ResultMessage (props) {
  const className = props.isCentered ? 'has-text-centered' : ''
  return (
    <p className={className}>
      {props.label}
    </p>
  )
}
