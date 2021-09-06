import React, { useState } from "react";
import { Box, Button } from "rebass";
import { Input, Textarea } from "@rebass/forms";
import { connect } from "react-redux";

import { RebassLabel } from "./RebassLabel";
import { addNote } from "../redux/actions";

const Note = (props) => {
  const [noteHeader, setNoteHeader] = useState("");
  const [noteValue, setNoteValue] = useState("");

  function saveClicked(e) {
    e.preventDefault();
    if (noteHeader === "" || noteValue === "") {
      alert("empty fields");
    } else {
      props.addNewNote(noteHeader, noteValue);
      setNoteHeader("");
      setNoteValue("");
    }
  }

  function clearBtnClicked() {
    setNoteHeader("");
    setNoteValue("");
  }

  return (
    <Box
      textAlign={"center"}
      sx={{
        marginLeft: "300px",
        marginRight: "300px",
        borderWidth: "2px",
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
          borderColor: "black",
          marginBottom: 3,
          marginTop: 2,
        }}
        value={noteHeader}
        onChange={(e) => setNoteHeader(e.target.value)}
      />
      <RebassLabel value="Note" marginBottom={[2, 3, 4]} />
      <Textarea
        sx={{
          height: "90px",
        }}
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
        + Add note
      </Button>
      <Button
        onClick={clearBtnClicked}
        sx={{
          fontSize: 1,
          background: "black",
          margin: 1,
        }}
      >
        Clear
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
