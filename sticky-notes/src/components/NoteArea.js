import React, { useState } from "react";
import { Box, Button } from "rebass";
import { Note } from "./Note";
import { RebassHeading } from "./RebassHeading";

export const NoteArea = () => {
  const [noteArea, setNoteArea] = useState([]);
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
