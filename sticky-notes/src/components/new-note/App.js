import { useState } from "react";
import { connect } from "react-redux";

import { addNote } from "../../redux/actions";

import Main from "./Main";
import Sidebar from "./SideBar";

import "./App.css";

function App(props) {
  const [activeNote, setActiveNote] = useState(false);

  // Add a new note
  const onAddNote = () => {
    props.addNewNote("", "");
  };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={activeNote} setActiveNote={setActiveNote} />
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
