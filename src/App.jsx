import React from "react";
import { Container } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Navigator from "./components/Navigator/Navigator";
import Table from "./components/Table/Table";
import Other from "./components/other/Other";
import { Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (
    <>
      <Container maxW={"6xxl"}>
        <Header />
        <Navigator />
        <Routes>
          <Route path="/" element={<Navigate to="/Table" />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/Other" element={<Other />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
