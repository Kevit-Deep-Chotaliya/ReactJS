import './App.css'
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, incrementByAmount } from './Redux/features/counterSlice'
import { useState } from 'react'

function App() {

  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
  const [num, setNum] = useState(5)

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => {
        dispatch(increment())
      }}>Increment</button>

      <button onClick={() => {
        dispatch(decrement())
      }}>Decrement</button>

      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(e.target.value)
        }} />

      <button onClick={() => {
        dispatch(incrementByAmount(Number(num)))
      }}>Increased by Amount</button>


    </>
  )
}

export default App
