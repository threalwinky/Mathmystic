import React from 'react'
import './Test.css'
import PoPuP from './PoPuP'

const Test = () => {
  return (
    <div>
      <button onClick={() => {PoPuP(1234)}}>
        Click
      </button>
    </div>
  )
}

export default Test
