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
      fileList.map(file => {
        axios
          .post('http://localhost:3333/api/v1/manager/pages', {
            image: file.name
          })
          .then(async ({ data }) => {
            const up = await axios.put(data.data, file, {
              headers: {
                'Content-Type': file.type
              },
              onUploadProgress: function (progressEvent) {
                var percentCompleted = Math.round(
                  (progressEvent.loaded * 100) / progressEvent.total
                )
                console.log(percentCompleted)
              }
            })
            console.log('state: ', up)
          })
      })
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
