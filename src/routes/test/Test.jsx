import React, { useState } from 'react'
import { storage } from '../../../firebase'
import { ref, uploadBytes } from 'firebase/storage'
// import { v4 } from 'uuid'
const Test = () => {

  const [file, setFile] = useState(null)

  const uploadfile = () =>{
    console.log(file)
    if (file == null) return
    const img = ref(storage, `test/${file[0].name}`)
    // console.log(`test/${file[0].name + v4()}`)
    // console.log(file[0].name)
    uploadBytes(img, file).then(() => {
     console.log("success") 
    })
  }

  return (
    <div>
      <input type="file" onChange={evt => setFile(evt.target.files)} />
      <button onClick={uploadfile}>up</button>
    </div>
  )
}

export default Test
