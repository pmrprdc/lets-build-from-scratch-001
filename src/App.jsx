import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
      
        <a href="https://reactjs.org" target="_blank">
          <img src="src/assets/mcl.jpeg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>WELCOME TO MCLOVINS PAGE</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
         SEND MC'LOVIN LOVE {count}
        </button>
        
      </div>
      <p className="read-the-docs">
       Hello My Name is Mv Lovin and this is my 10 minute react project!
      </p>
    </div>
  )
}

export default App
