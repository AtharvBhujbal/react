import React from 'react'
import './myStyles.css'

function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
        <h1 className={className}>StyleSheet</h1>
    </div>
  )
}

export default StyleSheet