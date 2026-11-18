import React from 'react'
import { fetchGIF, fetchPhotos } from './api/mediaApi'

const App = () => {

  return (
    <div className='h-screen w-full bg-gray-950 text-white'>
      <button className="ml-8 mt-4 bg-green-950 p-4" onClick={async () => {
        const data = await fetchPhotos('dog')
        console.log(data)
      }}>Get Photos</button>

      <button className="ml-8 mt-4 bg-green-950 p-4" onClick={async () => {
        const gif = await fetchGIF('dog')
        console.log(gif)
      }}>Get GIF</button>
    </div>
  )
}

export default App
