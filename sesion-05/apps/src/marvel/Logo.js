import React, { PropTypes } from 'react'

export default function Logo (props) {
  const className = props.isCentered ? 'has-text-centered' : ''

  return (
    <div className={className}>
      <img src='marvel-logo.jpeg' role='presentation' />
    </div>
  )
}

Logo.propTypes = {
  isCentered: PropTypes.bool
}
