import { useState } from "react";
import { connect } from "react-redux";
import { addNote, updateNote } from "../../redux/actions";

const Main = ({ activeNote, onUpdateNote, edit, noteId }) => {
  console.log("NEWACTIVE", activeNote);
  const [noteHeader, setNoteHeader] = useState("");
  const [noteValue, setNoteValue] = useState("");
  function updateNote() {
    console.log("ADD");
    edit(activeNote, noteHeader, noteValue);
  }
  // const onEditField = (key, value) => {
  //   onUpdateNote({
  //     ...activeNote,
  //     [key]: value,
  //     lastModified: Date.now(),
  //   });
  // };

  // if (!activeNote)
  //   return <div className="no-active-note">No note selected</div>;
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
        <button onClick={updateNote}>Update</button>
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
    addNewNote: (noteId, noteHeader, noteValue) => {
      dispatch(addNote(noteId, noteHeader, noteValue));
    },
    edit: (noteId, noteHeader, noteValue) =>
      dispatch(updateNote(noteId, noteHeader, noteValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
