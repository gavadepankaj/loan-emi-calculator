// src/components/LoanForm.js
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const LoanForm = ({ onCalculate }) => {
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [months, setMonths] = useState(12);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(principal, interestRate, months);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Loan Amount"
        type="number"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Interest Rate (%)"
        type="number"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Loan Duration (Months)"
        type="number"
        value={months}
        onChange={(e) => setMonths(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Calculate EMI
      </Button>
    </form>
  );
};

export default LoanForm;
