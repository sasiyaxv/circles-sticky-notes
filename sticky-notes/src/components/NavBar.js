import React from "react";
import { Flex, Text, Link, Box } from "rebass";

export const NavBar = () => {
  return (
    <Flex px={2} color="white" bg="black" alignItems="center">
      <Text p={2} fontWeight="bold">
        Add Note
      </Text>
      <Box mx="auto" />
      <Link variant="nav" href="#!">
        View Notes
      </Link>
    </Flex>
  );
};
