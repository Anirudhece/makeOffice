import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigator = () => {
  const location = useLocation();

  const activeRouteName = location.pathname.replace("/", "");

  return (
    <Flex size="sm" as="b" _hover={{ cursor: "pointer" }}>
      <Link to={"/Table"}>
        <Box
          color={activeRouteName === "Table" ? "#13193f" : "gray.400"}
          w="3xs"
          borderBottom="4px"
        >
          <Text my="2" textAlign="center">
            Overview
          </Text>
        </Box>
      </Link>
      <Link to={"/Other"}>
        <Box
          color={activeRouteName === "Other" ? "#13193f" : "gray.400"}
          w="3xs"
          borderBottom="4px "
        >
          <Text my="2" textAlign="center">
            Other
          </Text>
        </Box>
      </Link>
    </Flex>
  );
};

export default Navigator;
