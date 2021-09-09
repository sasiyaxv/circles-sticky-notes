import { useState } from "react";
import { connect } from "react-redux";

import { updateNote } from "../../redux/actions";

import "./App.css";

const Main = ({ activeNote, edit, setActiveNote }) => {
  const [noteHeader, setNoteHeader] = useState("");
  const [noteValue, setNoteValue] = useState("");

  function updateNote() {
    edit(activeNote.noteId, noteHeader, noteValue);

    setNoteHeader("");
    setNoteValue("");

    // setting active note to false
    setActiveNote(false);
  }
  // Clear button
  function clearNote() {
    setNoteHeader("");
    setNoteValue("");
  }

  if (!activeNote)
    return <div className="no-active-note">No note selected</div>;
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={noteHeader}
          onChange={(e) => setNoteHeader(e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={noteValue}
          onChange={(e) => setNoteValue(e.target.value)}
        />
        <button onClick={updateNote} className="update-note-button">
          Update
        </button>
        <button onClick={clearNote} className="clear-note-button">
          Clear
        </button>
      </div>
      <div>
        <h3>Title</h3>
        {activeNote.noteHeader}
        <br />
        <h3>Value</h3>
        {activeNote.noteValue}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    noteId: state.notes.noteId,
    notes: state.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    edit: (noteId, noteHeader, noteValue) =>
      dispatch(updateNote(noteId, noteHeader, noteValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
