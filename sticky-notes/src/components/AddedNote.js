import React from "react";
import { connect } from "react-redux";
import { addNote, deleteNote, updateNote } from "../redux/actions";

const AddedNote = (props) => {
  return (
    <div>
      <p>{props.noteId}</p>
      <p>{props.noteHeader}</p>
      <p>{props.noteValue}</p>
      <button onClick={() => props.remove(props.noteId)}>Delete</button>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    remove: (noteId) => dispatch(deleteNote(noteId)),
  };
}

export default connect(null, mapDispatchToProps)(AddedNote);
