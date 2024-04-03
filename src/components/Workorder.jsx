import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import Table from "./Table";
import Temp from './Temp'
import { data } from "./data";

const Navigator = () => {
  return (
    <Flex size="sm" as="b" _hover={{ cursor: "pointer" }}>
      <Box color="#13193f" w="3xs" borderBottom="4px">
        <Text my="2" textAlign="center">
          Overview
        </Text>
      </Box>
      <Box color="gray.400" w="3xs" borderBottom="4px ">
        <Text my="2" textAlign="center">
          Other
        </Text>
      </Box>
    </Flex>
  );
};

const Workorder = () => {
  return (
    <>
      <Navigator />
      <Temp />
      <Table/>
    </>
  );
};

export default Workorder;
