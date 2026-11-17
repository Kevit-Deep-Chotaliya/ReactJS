import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';
import ChildC from './components/ChildC';

//1. create context
const UserContext = createContext();
const ThemeContext = createContext();

//2. wrap all the child inside a provider

//3. pass value

//4. consume the value inside a consumer


function App() {

  const [User, setUser] = useState({ name: "Deep" });
  const [theme, setTheme] = useState("light");

  return (
    <>
      <div>
        <UserContext.Provider value={User}>
          <ThemeContext.Provider value={{ theme, setTheme }}>
            <div id='container' style={{ backgroundColor: theme === 'light' ? 'beige' : 'darkgrey' }}>
              <ChildC />
            </div>
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    </>
  )
}

export default App
export { UserContext }
export { ThemeContext }
