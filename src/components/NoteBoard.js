import React, { useState, useEffect } from "react";
import { ref, onValue, set } from "firebase/database";
import { database } from "../../src/firebaseconfig";

const NoteBoard = ({ name, setName, isEditing, setIsEditing }) => {
  const [note, setNote] = useState("");
  const noteRef = ref(database, "notes/main");

  useEffect(() => {
    onValue(noteRef, (snapshot) => {
      const data = snapshot.val();
      setNote(data);
    });
  }, [noteRef]);

  const handleChange = (e) => {
    const updatedNote = e.target.value;
    setNote(updatedNote);
    set(noteRef, updatedNote);
  };

  return (
    <div className="container">
      {isEditing ? (
        <div className="mt-4">
        <label for="not"><h5 className="text-danger">Edit Below Notes</h5></label>
        <textarea
        name ="note"
        className="form-control mt-3 "
          value={note}
          onChange={handleChange}
          style={{ width: "100%", height: "300px" }}
        />
        </div>
      ) : (
        <>
          <div className="text-center ms-5">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="form-control  mt-3"
            />
          </div>
          <button onClick={() => setIsEditing(true)} className="btn btn-primary mt-3">
            Edit Note
          </button>
        </>
      )}
    </div>
  );
};

export default NoteBoard;
