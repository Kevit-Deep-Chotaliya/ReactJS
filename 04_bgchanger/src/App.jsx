import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-15 inset-x-0 px-2'>
        <div className='fixed flex flex-wrap bg-white px-3 py-2 justify-center gap-3 shadow-lg rounded-xl'>
          <button onClick={() => setColor("red")} className='outline-null px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "red" }}>Red</button>

          <button onClick={() => setColor("green")} className='outline-null px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "green" }}>Green</button>

          <button onClick={() => setColor("blue")} className='outline-null px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "blue" }}>Blue</button>

          <button onClick={() => setColor("orange")} className='outline-null px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "orange" }}>Orange</button>

          <button onClick={() => setColor("aqua")} className='outline-null px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "aqua" }}>Aqua</button>

          <button onClick={() => setColor("grey")} className='outline-null px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "grey" }}>Grey</button>

          <button onClick={() => setColor("yellow")} className='outline-null px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "yellow" }}>Yellow</button>

          <button onClick={() => setColor("pink")} className='outline-null px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "pink" }}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
