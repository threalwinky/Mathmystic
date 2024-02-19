import React from 'react'
import { Audio, TailSpin } from 'react-loader-spinner'

import './Loading.css'

const Loading = () => {
  return (
    <div className='mmt__loading'>
      <TailSpin
        visible={true}
        height="300"
        width="300"
        color="#000"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        className=""
      />
    </div>
  )
}

export default Loading
