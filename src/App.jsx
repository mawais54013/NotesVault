import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNote => {
      console.log(prevNote)
      return [...prevNote, newNote];
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem) => {
        return <Note title={noteItem.title} content={noteItem.content} />
      })}
      <Footer />
    </div>
  );
}

export default App;