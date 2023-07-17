import React from 'react'
import { useState } from 'react'

function App() {
  const [ counter, setCounter ] = useState(0)

  const handlePlusClick = () => {
    setCounter(counter + 1)
  }

  const handleMinusClick = () => {
    setCounter(counter - 1)
  }

  const handleZeroClick = () => {
    setCounter(0)
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={handlePlusClick}>plus</button>
      <button onClick={handleMinusClick}>minus</button>
      <button onClick={handleZeroClick}>zero</button>
    </div>
  )
}

export default App
