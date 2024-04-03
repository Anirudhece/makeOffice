import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Checkbox,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const TableDemo = ({ data }) => {
  const [expandedRows, setExpandedRows] = useState([]);

  //   const handleRowToggle = (index) => {
  //     if (expandedRows.includes(index)) {
  //       setExpandedRows(expandedRows.filter((rowIndex) => rowIndex !== index));
  //     } else {
  //       setExpandedRows([...expandedRows, index]);
  //     }
  //   };

  const renderRow = (rowData, index, level = 0) => {
    const {
      package: packageName,
      rate,
      total,
      hasNestedData,
      nestedData,
    } = rowData;

    return (
      <>
        <Tr>
          <Td>
            <Checkbox />
          </Td>
          <Td>{packageName}</Td>
          <Td>{rate}</Td>
          <Td>₹ {total}</Td>
          <Td isNumeric>
            {hasNestedData && (
              <IconButton
                colorScheme="teal"
                isRound={true}
                variant="ghost"
                icon={
                  <AddIcon />
                  //   expandedRows.includes(index) ? <MinusIcon /> : <AddIcon />
                }
                fontSize="sm"
                // onClick={() => handleRowToggle(index)}
              />
            )}
          </Td>
        </Tr>

        {hasNestedData && tableHead(nestedData)}
      </>
    );
  };

  const tableHead = (data) => {
    return (
      <Tbody>{data.map((rowData, index) => renderRow(rowData, index))}</Tbody>
    );
  };

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
              <Th>Rate (in sqft)</Th>
              <Th>Total</Th>
              <Th> </Th>
            </Tr>
          </Thead>
          {tableHead(data)}
           {/* type of data is array */}
        </Table>
      </TableContainer>
    </>
  );
};

export default TableDemo;
