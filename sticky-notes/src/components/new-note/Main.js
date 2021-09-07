import { connect } from "react-redux";
import { addNote, updateNote } from "../../redux/actions";

const Main = ({ activeNote, onUpdateNote, addNewNote, edit, noteId }) => {
  function updateNote() {
    console.log("ADD");
    edit(noteId, activeNote.title, activeNote.body);
  }
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote)
    return <div className="no-active-note">No note selected</div>;
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
        <button onClick={updateNote}>Update</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    noteId: state.notes.noteId,
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
