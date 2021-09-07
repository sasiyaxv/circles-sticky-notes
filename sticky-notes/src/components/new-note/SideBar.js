import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState } from "react";
import { connect } from "react-redux";
import { deleteNote } from "../../redux/actions";

const Sidebar = ({
  notes,
  remove,
  filterednotes,
  setFilteredNotes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  function deleteClicked() {
    console.log("DELETE");
  }

  const [input, setInput] = useState("");

  const currentActiveNotes = input ? filterednotes : notes;

  console.log("NOTES", notes);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>
          <span className="highlight">Notes</span>
        </h1>
        <AddIcon className="app-sidebar-header-add" onClick={onAddNote} />
      </div>

      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            onClick={() => setActiveNote(note.id)}
          >
            <DeleteIcon
              className="sidebar-note-delete"
              onClick={() => remove(note.noteId)}
            />
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
            </div>
            <small className="note-meta">
              {new Date(note.lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    //   notes: state.notes,
    //   mainHeader: selectMainHeader(state),
    //   isLoading: state.settings.isLoading,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    remove: (noteId) => dispatch(deleteNote(noteId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
