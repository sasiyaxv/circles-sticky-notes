import React from "react";
import { connect } from "react-redux";

const NewTitleComponent = (props) => {
  return (
    <div>
      <a href="#">
        <h4>{props.title}</h4>
        <p>{props.noteDate}</p>
      </a>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    notes: state.notes,
  };
}

export default connect(mapStateToProps)(NewTitleComponent);
