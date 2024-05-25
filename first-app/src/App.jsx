import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {HeaderComponent} from './Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const [test,setTest] = useState(true)

  function handleClick(){
    setTest(!test);
    console.log('test event triggered');
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <HeaderComponent title="Hi">
        {import.meta.env.DEV ? 'local' : 'prod'}
      </HeaderComponent>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleClick}>Test event</button>
        {test ? <p>I am true</p> : <p>I am false</p>}
      </div>
    </>
  )
}

export default App
