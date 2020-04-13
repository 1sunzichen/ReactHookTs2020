import React from 'react'
import logo from './logo.svg'
import './App.css'
import Hello from './com/Hello'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello message={'嗨1'} />
      </header>
    </div>
  )
}

export default App
