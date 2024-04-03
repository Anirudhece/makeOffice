import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Checkbox,
  IconButton,
} from "@chakra-ui/react";
import { data } from "./data";
import { AddIcon } from "@chakra-ui/icons";

const RowData = ({ ele, leftGap }) => {
  return (
    <>
      <Tr>
        <Td px="0">
          <Checkbox borderColor="black" px="0" ml={leftGap} />
        </Td>
        <Td>{ele.packageName}</Td>
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
      {ele.hasNestedData && ele.nestedData && (
        <TableHead leftGap={leftGap} data={ele.nestedData} />
      )}
    </>
  );
};

const TableHead = ({ data, leftGap = 0 }) => {
  return (
    <>
      {data.map((ele, index) => (
        <RowData leftGap={leftGap + 8} id={index} ele={ele} />
      ))}
    </>
  );
};

const TableDemo = () => {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr colorScheme="teal">
              <Th>
                <Checkbox borderColor="black" />
              </Th>
              <Th>Packages</Th>
              <Th>Rate(in sqft) </Th>
              <Th>Total</Th>
              <Th> </Th>
            </Tr>
          </Thead>
          <Tbody>
            <TableHead data={data} />
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
export default TableDemo;