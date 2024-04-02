import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Checkbox,
  CheckboxGroup,
  Flex,
  IconButton,
} from "@chakra-ui/react";
// import { data } from "./data";
import { AddIcon } from "@chakra-ui/icons";
const TableDemo = () => {
  const data = [
    {
      package: "Civil 1",
      rate: "567.80",
      total: "2,98,6792",
      hasNestedData: true,
    },
    {
      package: "Civil 2",
      rate: "567.80",
      total: "2,98,6792",
      hasNestedData: true,
    },
    {
      package: "Civil 3",
      rate: "567.80",
      total: "2,98,6792",
      //   hasNestedData: true,
    },
    {
      package: "Civil 4",
      rate: "567.80",
      total: "2,98,6792",
      hasNestedData: true,
    },
    {
      package: "Civil 5",
      rate: "567.80",
      total: "2,98,6792",
      hasNestedData: true,
    },
  ];
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr colorScheme="teal">
              <Th>
                <Checkbox />
              </Th>
              <Th>Packages</Th>
              <Th>Rate(in sqft) </Th>
              <Th>Total</Th>
              <Th> </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((ele, index) => {
              return (
                <Tr>
                  <Td>
                    <Checkbox />
                  </Td>
                  <Td>{ele.package}</Td>
                  <Td>{ele.rate}</Td>
                  <Td> ₹ {ele.total}</Td>
                  <Td isNumeric>
                    {ele.hasNestedData && (
                      <IconButton
                        colorScheme="teal"
                        isRound={true}
                        variant="ghost"
                        icon={<AddIcon />}
                        fontSize="sm"
                      />
                    )}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
export default TableDemo;

