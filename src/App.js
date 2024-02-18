import React , {useState}from 'react';
import './App.css';
import NoteBoard from './components/NoteBoard';

function App() {
  const [name, setName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <p>Real-Time Note Collaboration App</p>
      </header>
      
      <NoteBoard
      name={name} setName={setName}
      isEditing={isEditing} setIsEditing={setIsEditing}
      />
    </div>
  );
}

export default App;
