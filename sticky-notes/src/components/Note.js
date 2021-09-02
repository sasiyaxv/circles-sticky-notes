import React, { useState } from "react";
import { Box, Button } from "rebass";
import { Input, Textarea } from "@rebass/forms";
import { RebassHeading } from "./RebassHeading";
import { connect } from "react-redux";
import { addNote, editNote, deleteNote } from "../redux/actions";

const Note = (props) => {
  // const { noteHeader, noteId, noteValue } = props;
  const [noteId, setNoteId] = useState("");
  const [noteHeader, setNoteHeader] = useState("");
  const [noteValue, setNoteValue] = useState("");

  return (
    <Box
      sx={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "black",
        marginBottom: 3,
      }}
    >
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
      <Textarea
        value={noteValue}
        onChange={(e) => setNoteValue(e.target.value)}
      ></Textarea>
      <br />
      <Button
        sx={{
          fontSize: 1,
          background: "black",
          margin: 1,
        }}
      >
        Save
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
  return {
    noteId: state.note.noteId,
    noteHeader: state.note.noteHeader,
    noteValue: state.note.noteValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // addNewNote: (noteId, noteHeader, noteValue) => {
    //   dispatch(addNote(noteId, noteHeader, noteValue));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
