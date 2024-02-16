import React from 'react'

import './NotFound.css'
import emoji from './emoji.png'

const NotFound = () => {
  return (
    <div className='mmt__notfound'>
      <div className='mmt__notfound-content'>
        <div className='mmt__notfound-content_404'>
          <h1>4<span></span>4</h1>
        </div>
        <h2>Oops! Page Not Be Found</h2>
        <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
        <a href="javascript:history.back()" >Back to previous page</a>
        <a href="/">Back to homepage</a>
      </div>
    </div>

  )
}

export default NotFound
