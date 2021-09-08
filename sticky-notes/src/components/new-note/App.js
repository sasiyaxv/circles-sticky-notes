import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./Main";
import Sidebar from "./SideBar";
import { addNote } from "../../redux/actions";
import { connect } from "react-redux";

const newNote = () => {
  return { id: uuid(), title: "", body: "", lastModified: Date.now() };
};

function App(props) {
  const [notes, setNotes] = useState([]);

  const [activeNote, setActiveNote] = useState("");

  // Add a new note
  const onAddNote = () => {
    // update the list of notes
    props.addNewNote("", "");
    // setNotes([newNote(), ...notes]);
  };

  // const onUpdateNote = (updatedNote) => {
  //   const updatedNotesArray = notes.map((note) => {
  //     if (note.noteId === activeNote) {
  //       return updatedNote;
  //     }
  //     return note;
  //   });

  //   setNotes(updatedNotesArray);
  // };

  const onUpdateNote = (updatedNote) => {
    // const updatedNotesArray = notes.map((note) => {
    //   if (note.id === activeNote) {
    //     return updatedNote;
    //   }
    //   return note;
    // });
    // setNotes(updatedNotesArray);
  };

  // const onDeleteNote = (idToDelete) => {
  //   setNotes(notes.filter((note) => note.id !== idToDelete));
  // };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        setNotes={setNotes}
        onAddNote={onAddNote}
        // onDeleteNote={onDeleteNote}

        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={activeNote} onUpdateNote={onUpdateNote} />
      {activeNote}
      {/* onUpdateNote={onUpdateNote} */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noteId: state.notes.noteId,
    notes: state.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewNote: (noteId, noteHeader, noteValue) => {
      dispatch(addNote(noteId, noteHeader, noteValue));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
