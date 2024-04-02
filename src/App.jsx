import React from "react";
import { Container, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Workorder from "./components/Workorder";
function App() {
  return (
    <>
      <Container maxW={"6xxl"}>
        <Navbar />
        <Workorder />
      </Container>
    </>
  );
}

export default App;
