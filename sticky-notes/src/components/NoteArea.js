import React, { useState } from "react";
import { Box, Button } from "rebass";
import Note from "./Note";
import { RebassHeading } from "./RebassHeading";
import { connect } from "react-redux";
import { addNote, editNote, deleteNote } from "../redux/actions";

const NoteArea = (props) => {
  const [noteArea, setNoteArea] = useState([]);

  const { addNewNote } = props;

  function addBtnClicked(e) {
    e.preventDefault();
    setNoteArea(noteArea.concat(<Note />));
    // addNewNote();
  }

  return (
    <Box>
      <RebassHeading value={"Take a Note"} />
      {noteArea}
      <Button
        onClick={addBtnClicked}
        sx={{
          fontSize: 1,
          background: "black",
          margin: 2,
          textAlign: "right",
        }}
      >
        +
      </Button>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    // noteId: state.note.noteId,
    // noteHeader: state.note.noteHeader,
    // noteValue: state.note.noteValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewNote: (noteId, noteHeader, noteValue) => {
      dispatch(addNote(noteId, noteHeader, noteValue));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteArea);
