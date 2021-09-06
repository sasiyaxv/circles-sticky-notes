import React from "react";
import AddedNote from "./AddedNote";
import { connect } from "react-redux";

function NoteList(props) {
  return (
    <div className="note-list">
      {props.notes.map((note) => (
        <AddedNote
          key={note.noteId}
          noteId={note.noteId}
          noteHeader={note.noteHeader}
          noteValue={note.noteValue}
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    notes: state.notes,
  };
}

export default connect(mapStateToProps)(NoteList);
