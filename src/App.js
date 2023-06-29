import { useState } from "react";

import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";

import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="note-list">
        {notes?.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
