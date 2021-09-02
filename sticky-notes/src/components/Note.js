import React, { useState } from "react";
import { Box, Button } from "rebass";
import { Input, Textarea } from "@rebass/forms";
import { connect } from "react-redux";

import { RebassLabel } from "./RebassLabel";
import { addNote, deleteNote, updateNote } from "../redux/actions";

const Note = (props) => {
  const { addNewNote, deleteNote, noteId } = props;
  const [noteHeader, setNoteHeader] = useState("");
  const [noteValue, setNoteValue] = useState("");

  console.log("PROPS", props);

  function saveClicked(e) {
    e.preventDefault();
    addNewNote(noteHeader, noteValue);
  }

  function deleteClicked(e) {
    e.preventDefault();
    setNoteHeader("");
    setNoteValue("");
    deleteNote(noteId);
  }

  return (
    <Box
      sx={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "black",
        marginBottom: 3,
        backgroundColor: "lightblue",
      }}
    >
      <RebassLabel value="Title" marginBottom={[2, 3, 4]} />
      <Input
        sx={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "black",
          marginBottom: 3,
          marginTop: 2,
        }}
        value={noteHeader}
        onChange={(e) => setNoteHeader(e.target.value)}
      />
      <RebassLabel value="Note" marginBottom={[2, 3, 4]} />
      <Textarea
        value={noteValue}
        onChange={(e) => setNoteValue(e.target.value)}
      ></Textarea>
      <br />
      <Button
        onClick={saveClicked}
        sx={{
          fontSize: 1,
          background: "black",
          margin: 1,
        }}
      >
        Add note
      </Button>
      <Button
        sx={{
          fontSize: 1,
          background: "black",
          margin: 1,
        }}
      >
        Edit note
      </Button>
      <Button
        onClick={deleteClicked}
        sx={{
          fontSize: 1,
          background: "black",
          margin: 1,
        }}
      >
        Delete
      </Button>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    noteId: state.notes.noteId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewNote: (noteHeader, noteValue) => {
      dispatch(addNote(noteHeader, noteValue));
    },
    deleteNote: (noteId) => {
      dispatch(deleteNote(noteId));
    },
    editNote: (noteId, noteHeader, noteValue) => {
      dispatch(updateNote(noteId, noteHeader, noteValue));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
