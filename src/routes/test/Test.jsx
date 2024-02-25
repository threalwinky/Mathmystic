import React from 'react'
import { Loading } from '../../containers'
import './Test.css'
const Test = () => {

  const s = "123<br/>123"

  return (
    <div>
      {s}
      <div dangerouslySetInnerHTML={{__html: s}}></div>
    </div>
  )
}

export default Test
