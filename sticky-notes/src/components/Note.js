import React, { useState } from "react";
import { Box, Button } from "rebass";
import { Input, Textarea } from "@rebass/forms";
import { connect } from "react-redux";

import { RebassLabel } from "./RebassLabel";
import { addNote } from "../redux/actions";

const Note = (props) => {
  const { addNewNote } = props;
  const [noteHeader, setNoteHeader] = useState("");
  const [noteValue, setNoteValue] = useState("");

  function saveClicked(e) {
    e.preventDefault();
    addNewNote(noteHeader, noteValue);
  }

  return (
    <Box
      sx={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "black",
        marginBottom: 3,
      }}
    >
      <RebassLabel value="Title" />
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
      <RebassLabel value="Note" />
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewNote: (noteHeader, noteValue) => {
      dispatch(addNote(noteHeader, noteValue));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
