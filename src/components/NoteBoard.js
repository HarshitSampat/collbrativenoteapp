import React, { useState, useEffect } from 'react';
import { ref, onValue, set } from 'firebase/database';
import  {database}  from '../../src/firebaseconfig'

const NoteBoard = () => {
  const [note, setNote] = useState('');
  const noteRef = ref(database, 'notes/main');

  useEffect(() => {
    onValue(noteRef, (snapshot) => {
      const data = snapshot.val();
      setNote(data);
    });
  }, []);

  const handleChange = (e) => {
    const updatedNote = e.target.value;
    setNote(updatedNote);
    set(noteRef, updatedNote);
  };

  return (
    <textarea
      value={note}
      onChange={handleChange}
      style={{ width: '100%', height: '300px' }}
    />
  );
};

export default NoteBoard;
