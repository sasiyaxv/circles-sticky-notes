import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteNote, updateNote } from "../redux/actions";
import addedNote from "../styles/addedNote.css";

const AddedNote = (props) => {
  const [noteHeader, setNoteHeader] = useState("");
  const [noteValue, setNoteValue] = useState("");
  return (
    <div className="note-container">
      <input
        className="input-field-header"
        placeholder={props.noteHeader}
        value={noteHeader}
        onChange={(e) => setNoteHeader(e.target.value)}
      />
      <br />
      <input
        className="input-field"
        placeholder={props.noteValue}
        value={noteValue}
        onChange={(e) => setNoteValue(e.target.value)}
      />
      <br />
      <button
        className="edit-button"
        onClick={() => props.edit(props.noteId, noteHeader, noteValue)}
      >
        Edit
      </button>
      <button
        className="delete-button"
        onClick={() => props.remove(props.noteId)}
      >
        X
      </button>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    remove: (noteId) => dispatch(deleteNote(noteId)),
    edit: (noteId, noteHeader, noteValue) =>
      dispatch(updateNote(noteId, noteHeader, noteValue)),
  };
}

export default connect(null, mapDispatchToProps)(AddedNote);
