import { useState, useCallback } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pswd = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`=";

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass = str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md text-center rounded-lg px-4 py-4 my-8 text-orange-800 bg-white'>

        <h1 className='text-black text-center my-4 mb-6 text-2xl text-bold'>
          Password generator
        </h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-amber-200'>
          <input
            type="text"
            value={password}
            className='outline-none w-full px-3 py-1'
            placeholder='password'
            readOnly
          />
          <button className='outline-none bg-orange-300 px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value) }}
            />
            <label htmlFor='LengthInput'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
                   defaultChecked= {numberAllowed}
                   id='numberInput'
                   onChange={(prev) => !prev}/>
                   <label htmlFor="NumberInput">Numbers</label>
          </div>
           <div className='flex items-center gap-x-1'>
            <input type="checkbox"
                   defaultChecked= {charAllowed}
                   id='charInput'
                   onChange={(prev) => !prev}/>
                   <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
