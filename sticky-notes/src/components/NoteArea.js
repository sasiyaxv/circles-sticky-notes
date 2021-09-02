import React, { useState } from "react";
import { Box, Button } from "rebass";
import Note from "./Note";
import { RebassHeading } from "./RebassHeading";
import { connect } from "react-redux";
import { addNote, editNote, deleteNote } from "../redux/actions";

const NoteArea = (props) => {
  const [noteArea, setNoteArea] = useState([]);

  function addBtnClicked(e) {
    e.preventDefault();
    setNoteArea(noteArea.concat(<Note />));
  }

  return (
    <Box>
      <RebassHeading
        value={"Add your Notes"}
        marginBottom={[2, 3, 4]}
        fontSize={[5, 6, 7]}
      />
      <Note />
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewNote: (noteId, noteHeader, noteValue) => {
      dispatch(addNote(noteId, noteHeader, noteValue));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteArea);
