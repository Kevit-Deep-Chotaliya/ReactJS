import { useState } from 'react'
import './App.css'
import useCustomMemo from './hooks/use-custom-memo'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(100)

  const squaredValue = () => {
    console.log("Expensive calculations...");
    return count * count;
  }

  const memoisedSquaredValue = useCustomMemo(squaredValue, [count]);

  return (
    <>
      <h2 className='p-4 '>Counter : {count}</h2>
      <h2>squaredValue: {memoisedSquaredValue}</h2>
      <h2 className='p-4 '>Counter1 : {count1}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount1(count1 - 1)}>Decrement</button>
    </>
  )
}

export default App
