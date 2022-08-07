import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, ticketNum, email, phone, total) {
  return { name, ticketNum, email, phone, total };
}

const rows = [createData('Ice Age', 159, 6.0, 24, 4.0)];

export default function BasicTable() {
  return (
    <TableContainer sx={{ width: '70%' }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: 'teal' }}>
            <TableCell sx={{ color: 'white', fontWeight: '600' }}>
              Movie
            </TableCell>
            <TableCell sx={{ color: 'white', fontWeight: '600' }} align="right">
              No. of Tickets
            </TableCell>
            <TableCell sx={{ color: 'white', fontWeight: '600' }} align="right">
              Email
            </TableCell>
            <TableCell sx={{ color: 'white', fontWeight: '600' }} align="right">
              Phone Number
            </TableCell>
            <TableCell sx={{ color: 'white', fontWeight: '600' }} align="right">
              Total
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.ticketNum}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
          <div className="absolute left-1/2 -translate-x-1/2 space-x-10 items-center justify-center mt-8">
            <button className="bg-red-500 cursor-pointer">Pay with Cash</button>
            <button className="bg-green-500 cursor-pointer">
              Other Methods
            </button>
          </div>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
