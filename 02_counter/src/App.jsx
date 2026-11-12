import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter < 20) {
      setCounter((prev) => prev + 1);
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  }

  const resetValue = () => {
    setCounter(0);
  }

  return (
    <>
      <h1>React Learning</h1>
      <h2 style={{ color: counter === 0 || counter === 20 ? 'red' : 'green' }}>
        Counter Value: {counter}
      </h2>

      {counter === 20 && (
        <p>Maximum limit reached!!</p>
      )}

      {counter === 0 && (
        <p>Minimum limit reached!!</p>
      )}

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <br />
      <button onClick={resetValue}>Reset</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
