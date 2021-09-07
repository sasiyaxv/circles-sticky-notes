import React from "react";
import { connect } from "react-redux";
import { deleteNote } from "../../redux/actions";
import "./titleComponent.css";

const NewTitleComponent = (props) => {
  return (
    <div className="main-note-title-container">
      <button>
        <h4>{props.title}</h4>
        <p>{props.noteDate}</p>
      </button>
      <button onClick={() => props.remove(props.noteId)}>X</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    notes: state.notes,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    remove: (noteId) => dispatch(deleteNote(noteId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTitleComponent);
