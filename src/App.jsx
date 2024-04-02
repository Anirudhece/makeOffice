import React from "react";
import { Container, Text } from "@chakra-ui/react";
import Header from "./components/Header";
import Workorder from "./components/Workorder";
function App() {
  return (
    <>
      <Container maxW={"6xxl"}>
        <Header />
        <Workorder />
      </Container>
    </>
  );
}

export default App;
