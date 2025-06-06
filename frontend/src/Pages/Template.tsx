import { useState } from 'react'
import reactLogo from '../assets/react.svg'

export function Template() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Our React Project</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the React logo to learn more
        </p>
      </>
    )
  }