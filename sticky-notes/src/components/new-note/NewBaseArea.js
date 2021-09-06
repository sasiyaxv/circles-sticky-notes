import React, { useState } from "react";
import Note from "../Note";
import NewTitleComponent from "./NewTitleComponent";
import { connect } from "react-redux";
import NewNoteValue from "./NewNoteValue";
import "./styles.css";
import NewNoteList from "./NewNoteList";
import NewNote from "./NewNote";

const NewBaseArea = (props) => {
  const [noteBase, setNoteBase] = useState([]);
  const [noteContent, setNoteContent] = useState("");

  function addNoteBtnClicked() {
    setNoteBase(noteBase.concat(<NewNote />));
  }

  return (
    <div>
      <h1>Take a Note</h1>
      <button onClick={addNoteBtnClicked}>+ Add note</button>

      <div className="main-container">
        {/* <div className="note-list"> */}
        {/* {props.notes.map((note) => (
            <NewTitleComponent
              key={note.noteId}
              noteDate={note.noteDate}
              title={note.noteHeader}
            />
          ))}
        </div>
        <div className="note-values">
        

          {props.notes.map((note) => (
            <NewNoteValue key={note.noteId} noteValue={note.noteValue} />
          ))} */}
        {/* </div> */}
        {noteBase}
        <NewNoteList />
      </div>
      {noteContent}
      <input></input>
      <input></input>
      <button>Update</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    notes: state.notes,
  };
}

export default connect(mapStateToProps)(NewBaseArea);
