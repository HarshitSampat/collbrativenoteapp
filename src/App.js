import React from 'react';
import './App.css';
import NoteBoard from './components/NoteBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Real-Time Note Collaboration App</p>
      </header>
      <NoteBoard />
    </div>
  );
}

export default App;
