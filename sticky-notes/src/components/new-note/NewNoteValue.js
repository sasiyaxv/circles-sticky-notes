import React from "react";
import { connect } from "react-redux";

const NewNoteValue = (props) => {
  return <div>{props.noteValue}</div>;
};

function mapStateToProps(state) {
  return {
    notes: state.notes,
  };
}

export default connect(mapStateToProps)(NewNoteValue);
