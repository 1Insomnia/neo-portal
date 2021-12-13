// Table.js
import { useTable } from 'react-table';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react';

const DataTable = ({ columns, data }) => {
    // Use the useTable Hook to send the columns and data to build the table
    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        rows, // rows for the table based on the data passed
        prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    } = useTable({
        columns,
        data,
    });
    return (
        <Table {...getTableProps()}>
            <Thead>
                {headerGroups.map((headerGroup, index) => (
                    <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                        {headerGroup.headers.map((column, index) => (
                            <Th {...column.getHeaderProps()} key={index}>
                                {column.render('Header')}
                            </Th>
                        ))}
                    </Tr>
                ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
                {rows.map((row, index) => {
                    prepareRow(row);
                    return (
                        <Tr {...row.getRowProps()} key={index}>
                            {row.cells.map((cell, index) => {
                                return (
                                    <Td {...cell.getCellProps()} key={index}>
                                        {cell.render('Cell')}
                                    </Td>
                                );
                            })}
                        </Tr>
                    );
                })}
            </Tbody>
        </Table>
    );
};

export default DataTable;
