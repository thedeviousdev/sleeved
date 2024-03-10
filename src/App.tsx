import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>Hi Mat</h1>
      <div className="card">
        <button onClick={() => { setCount((count) => count + 1); }}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
