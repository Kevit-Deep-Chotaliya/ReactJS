import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp() {
  return(
    <h1>My custom app!!</h1>
  )
}

const first = "again and again"

const reactElement = React.createElement(
  'a', 
  {href: "https://google.com", target: '_blank'},
  "Click me to visit Google...",
  first
)
createRoot(document.getElementById('root')).render(

  reactElement

)
