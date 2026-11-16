import { useId, useReducer } from 'react'
import './App.css'
import { act } from 'react'

const emptydata = {
  name: "",
  password: "",
  email: "",
  city: "",
  address: ""
}

const reducer = (data, action) => {
  return { ...data, [action.type]: action.val }
}


function App() {

  const [state, dispatch] = useReducer(reducer, emptydata);

  console.log(state);

  return (
    <>
      <div>
        <h1>Use Reducer</h1>
        <input type="text" onChange={(e) => dispatch({ val: e.target.value, type: "name" })} placeholder='Enter name' />
        <br /><br />

        <input type="text" onChange={(e) => dispatch({ val: e.target.value, type: "email" })} placeholder='Enter email' />
        <br /><br />

        <input type="text" onChange={(e) => dispatch({ val: e.target.value, type: "password" })} placeholder='Enter password' />
        <br /><br />

        <input type="text" onChange={(e) => dispatch({ val: e.target.value, type: "city" })} placeholder='Enter city' />
        <br /><br />

        <input type="text" onChange={(e) => dispatch({ val: e.target.value, type: "address" })} placeholder='Enter address' />
        <br /><br />

        <ul>
          <li>Name: {state.name}</li>
          <li>email: {state.email}</li>
          <li>password: {state.password}</li>
          <li>city: {state.city}</li>
          <li>address: {state.address}</li>
        </ul>

        <button>Add Details</button>
      </div>
    </>
  )
}


export default App
