import React, { useMemo } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Text, Box } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon,ArrowDownIcon,ArrowUpIcon } from '@chakra-ui/icons'
// import Data from "../Dataset/Data.json";
import Data from '../Dataset/Data.json'
import { useTable,useSortBy } from "react-table";
import { COLUMNS } from "./Columns";
const DataTable = () => {
  //   let columns = Object.keys(Data[0]);  //columns list before using react table.

  // we momoized the columns and data so that our table don't get render again and again.

  const columns = useMemo(() => COLUMNS, []);

  // you can pass your data at Data 
  const data = useMemo(() => Data, []);

  const tableInstance = useTable({
    columns,
    data,
  },useSortBy);

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    tableInstance;

  return (
    <Box maxH="40em" overflowY="scroll">
      <Table {...getTableProps()} size="sm" variant="simple">
        <Thead
          p="0"
          position="sticky"
          zIndex="1"
          top="0px"
          style={{ overflow: "scroll" }}
          bg="gray.100"
        >
          {headerGroups.map((headerGroup, indexKey) => (
            <Tr p="0" key={indexKey} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, columnIndex) => (
                <Th
                  borderColor="gray.200"
                  p="1em"
                  className="th1"
                  key={columnIndex}
                  color={"gray.800"}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {/* This will render the Title of column */}
                  {column.render("Header")}
                  <span>

                    {column.isSorted?(column.isSortedDesc? <ArrowDownIcon/> :<ArrowUpIcon/> ):''}
                  </span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>

        {rows && rows.length > 0 ? (
          <Tbody className="body1" p="1em" {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <Tr className="tr1" {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <Td
                        className="td1"
                        color={"gray.600"}
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}{" "}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        ) : (
          <Text textAlign="center" fontSize="1em" mx="auto">
            No Data Found
          </Text>
        )}
      </Table>
    </Box>
  );
};

export default DataTable;