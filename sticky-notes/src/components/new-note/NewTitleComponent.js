import React from "react";
import { connect } from "react-redux";
import "./titleComponent.css";

const NewTitleComponent = (props) => {
  return (
    <div className="main-note-title-container">
      <button>
        <h4>{props.title}</h4>
        <p>{props.noteDate}</p>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    notes: state.notes,
  };
}

export default connect(mapStateToProps)(NewTitleComponent);
