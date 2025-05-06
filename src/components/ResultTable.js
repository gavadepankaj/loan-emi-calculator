// src/components/ResultTable.js
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const ResultTable = ({ emi, currency, rates }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Month</TableCell>
          <TableCell>EMI ({currency})</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* Assuming EMI for each month is the same */}
        {[...Array(12)].map((_, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{(emi * rates[currency]).toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ResultTable;
