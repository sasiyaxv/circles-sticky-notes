import React, { useState } from "react";
import { Box, Button } from "rebass";
import { Note } from "./Note";
import { RebassHeading } from "./RebassHeading";
import { connect } from "react-redux";

const NoteArea = (props) => {
  const [noteArea, setNoteArea] = useState([]);

  const { noteHeader } = props;

  return (
    <Box>
      <RebassHeading value={"Take a Note"} />
      {noteArea}
      <Button
        onClick={() => setNoteArea(noteArea.concat(<Note />))}
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
    // noteHeader: note.noteHeader,
    // noteValue:note.noteValue
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // addNote: (noteHeader, noteValue) => {
    //   dispatch(
    //   );
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteArea);
