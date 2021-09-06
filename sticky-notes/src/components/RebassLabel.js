import React from "react";
import { Text } from "rebass";

export const RebassLabel = ({ value, marginBottom }) => {
  return <Text mb={marginBottom}>{value}</Text>;
};
