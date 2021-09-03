import React, { useState } from "react";
import { Box, Button } from "rebass";
import { Input, Textarea } from "@rebass/forms";
import { connect } from "react-redux";

import { RebassLabel } from "./RebassLabel";
import { addNote, deleteNote, updateNote } from "../redux/actions";
import { AddedNote } from "./AddedNote";

const Note = (props) => {
  console.log("PROPS", props);
  // const { addNewNote, deleteNote, noteId } = props;
  const [noteHeader, setNoteHeader] = useState("");
  const [noteValue, setNoteValue] = useState("");

  function saveClicked(e) {
    e.preventDefault();
    props.addNewNote(noteHeader, noteValue);
  }

  function deleteClicked(e) {
    e.preventDefault();
    setNoteHeader("");
    setNoteValue("");
    props.deleteNote(props.noteId);
  }

  return (
    <Box
      sx={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "black",
        marginBottom: 3,
        backgroundColor: "#C8C6C6",
      }}
    >
      <RebassLabel value="Title" marginBottom={[2, 3, 4]} />
      <label value={props.noteId} />

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
        Save note
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
    addNewNote: (noteId, noteHeader, noteValue) => {
      dispatch(addNote(noteId, noteHeader, noteValue));
    },
    // deleteNote: (noteId) => {
    //   dispatch(deleteNote(noteId));
    // },
    editNote: (noteId, noteHeader, noteValue) => {
      dispatch(updateNote(noteId, noteHeader, noteValue));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
