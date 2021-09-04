import React from "react";
import { Heading } from "rebass";

export const RebassHeading = ({
  value,
  fontSize,
  fontFamily,
  marginTop,
  marginBottom,
}) => {
  return (
    <Heading
      fontFamily={fontFamily}
      mt={marginTop}
      mb={marginBottom}
      fontSize={fontSize}
    >
      {value}
    </Heading>
  );
};
