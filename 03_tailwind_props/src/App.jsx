import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

const obj = {
  username: "Deep",
  age: 28
}

const arr = [1,2,4,5,6,7,8,8,9]
function App() {
  return (
    <>
    <h1 className='bg-green-300 text-black p-4 rounded-xl mb-4 text-center mt-4 ml-4 mr-4'>Tailwind CSS</h1>
    <Card productname = "Headphone" TrackName= "22 Track"/>
    <Card productname = "Noise AirPhone" TrackName='35 Track'/>
    </>
  )
}

export default App
