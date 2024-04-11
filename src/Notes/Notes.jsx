import React, { useState } from "react";
import "./Notes.css";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  function handleNotes(e) {
    setNewNote(e.target.value);
  }

  function addNote() {
    if (newNote.trim() != "") {
      setNotes((n) => [...n, newNote]);
      setNewNote("");
    }
  }

  function removeNote(index) {
    const currentNotes = notes.filter((_, i) => i !== index);
    setNotes(currentNotes);
  }

  return (
    <div className="notes-container">
      <h2>Notes</h2>
      <div className="notes">
        <div className="notes-input">
          <textarea
            value={newNote}
            placeholder="Jot something down..."
            onChange={handleNotes}
          ></textarea>
          <button onClick={addNote}>Add Note</button>
        </div>

        <ul>
          {notes.map((n, i) => (
            <li key={i}>
              <p>{n}</p>
              <button className="n-remove-button" onClick={() => removeNote(i)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Notes;
