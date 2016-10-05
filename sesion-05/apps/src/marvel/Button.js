import React, { PropTypes } from 'react'
import Spinner from 'react-spinkit'

export default function Button (props) {
  return (
    <button>{
      props.isLoading
        ? <Spinner spinnerName="circle" noFadeIn />
        : props.label
    }</button>
  )
}

Button.propTypes = {
  isLoading: PropTypes.bool,
  label: PropTypes.string
}
