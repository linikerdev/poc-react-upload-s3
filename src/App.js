import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
const Box = styled.section`
  padding: 4em;
  background: papayawhip;
`

function App () {
  const [pictures, setPictures] = useState([])

  const onChangePicture = e => {
    if (e.target.files.length > 0) {
      const { files } = e.target
      const fileList = Object.values(files)
      fileList.map(async file => {
        const url =
          'https://unicorn-frontend.s3.amazonaws.com/teste/globo.jpeg?AWSAccessKeyId=AKIA6BAZFILS72QASHPJ&Expires=1573013875&Signature=0SXpQG3iUCBZFFXft7nfR7jDNCw%3D'

        const config = {
          headers: {
            'Content-Type': 'image/*'
          },
          onUploadProgress: progressEvent => console.log(progressEvent.loaded)
        }
        const up = await axios.put(url, file, {
          headers: {
            'Content-Type': file.type
          }
        })
        console.log(up)

        // setPictures([...pictures, file])
      })
      // setPictures([...f)
    }
  }
  return (
    <Box>
      <h1>Thomas Baby</h1>
      <input name='' type='file' onChange={onChangePicture} multiple />
      {pictures.map((f, i) => (
        <div key={i}>{f.name}</div>
      ))}
    </Box>
  )
}

export default App
