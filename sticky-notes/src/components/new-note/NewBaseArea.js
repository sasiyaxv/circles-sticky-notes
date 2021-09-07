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

  const [noteValue, setNoteValue] = useState("");

  function addNoteBtnClicked() {
    setNoteBase(noteBase.concat(<NewNote />));
  }

  return (
    <div>
      <h1>Take a Note</h1>
      <button onClick={addNoteBtnClicked}>+ Add note</button>

      <div className="main-container">
        {noteBase}
        <NewNoteList />
      </div>

      <div className="note-value-container">
        <input
          value={noteValue}
          onChange={(e) => setNoteValue(e.target.value)}
        />
        <button>Update</button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    notes: state.notes,
  };
}

export default connect(mapStateToProps)(NewBaseArea);
