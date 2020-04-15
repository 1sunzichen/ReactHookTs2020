import React from 'react';
import './App.css';
import Like from './com/LikeButton';
import Mouse from './com/MouseTracker';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Like/>
       <Mouse/>
      </header>
    </div>
  );
}

export default App;
