import React from "react";
import { Heading } from "rebass";

export const RebassHeading = ({ value, fontSize, marginTop, marginBottom }) => {
  return (
    <Heading mt={marginTop} mb={marginBottom} fontSize={fontSize}>
      {value}
    </Heading>
  );
};
