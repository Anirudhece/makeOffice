import React from "react";
import { Flex, Text, IconButton, Button } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Flex size="md" py="2" alignItems="center" justifyContent="space-between">
      <Flex color="#13193f" alignItems="center" as="b">
        <IconButton
          mr="0.5"
          fontSize='lg'
          
          isRound={true}
          variant="ghost"
          icon={<ChevronLeftIcon />}
        />
        <Text>Create Workorder</Text>
      </Flex>
      <Button w='40' colorScheme="teal">
        Save
      </Button>
    </Flex>
  );
};

export default Navbar;
