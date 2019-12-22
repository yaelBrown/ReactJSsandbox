import React from 'react'

export default function Person(props) {
  return (
    <div>
      {/* <p>I am a person and I am {Math.floor(Math.random() * 30)} years old!</p> */}
      <p>I am {props.name} and I am {props.age} years old!</p>
    </div>
  )
}
