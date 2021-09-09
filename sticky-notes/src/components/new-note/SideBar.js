import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";

import date from "date-and-time";

import { deleteNote } from "../../redux/actions";

const Sidebar = ({ notes, remove, onAddNote, activeNote, setActiveNote }) => {
  const now = new Date();

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
            key={note.noteId}
            className="app-sidebar-note"
            className={`app-sidebar-note ${
              note.noteId === activeNote.noteId && "active"
            }`}
            onClick={() => setActiveNote(note)}
          >
            <DeleteIcon
              className="sidebar-note-delete"
              onClick={() => remove(note.noteId)}
            />
            <div className="sidebar-note-title">
              <strong>{note.noteHeader}</strong>
            </div>
            <small className="note-meta">
              {date.format(now, "ddd, MMM DD YYYY")}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    remove: (noteId) => dispatch(deleteNote(noteId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
