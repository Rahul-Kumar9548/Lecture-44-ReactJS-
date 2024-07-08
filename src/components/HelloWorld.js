import React from 'react'
import initialWorld from './initialWorld'

const HelloWorld = () => {

    let styles = {
        'background-color': 'orange'
    }

  return (

    <div style={styles}>
        <initialWorld />
    <div>HelloWorld</div>
    </div>
  )
}

export default HelloWorld