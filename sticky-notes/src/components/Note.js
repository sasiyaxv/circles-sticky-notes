import React from "react";
import { Box, Button } from "rebass";
import { Input } from "@rebass/forms";
import { RebassHeading } from "./RebassHeading";

export const Note = () => {
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
      />
      <textarea></textarea>
      <br />
      <Button
        sx={{
          fontSize: 1,
          background: "black",
          margin: 1,
        }}
      >
        Edit
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
