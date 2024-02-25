import React from 'react'

const Study = () => {
  return (
    <div>
      <iframe 
      allowfullscreen="allowfullscreen" 
      scrolling="no" class="fp-iframe" 
      style={{border: "1px solid lightgray", width: "40%", height: "400px", padding: 20}}
      src="https://heyzine.com/flip-book/11dd3247df.html">
      </iframe>

      {/* <iframe allowfullscreen="allowfullscreen"
       scrolling="no" class="fp-iframe" 
       style="border: 0px; width: 100%; height: 400px;"
        src="https://heyzine.com/flip-book/11dd3247df.html"></iframe> */}

      {/* <a href="https://heyzine.com/flip-book/11dd3247df.html"
       target="_BLANK" class="heyzine-link fp-link">
        <img src="https://cdnc.heyzine.com/flip-book/cover/11dd3247df.jpg" 
        class="fp-thumb"
         style="border: 1px solid lightgray; box-shadow: lightgray 0px 0px 4px 1px; width: 250px;"></a> */}
    </div>
  )
}

export default Study
