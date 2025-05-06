// src/App.js
import { useExchangeRates } from "./hooks/useExchangeRates";
import { MenuItem, Select, CircularProgress } from "@mui/material";
import { generateSchedule } from "./utils/generateSchedule";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { calculateEMI } from "./hooks/calculateEMI";
import { useThemeContext } from "./context/ThemeContext";

function App() {
  const [schedule, setSchedule] = useState([]);

  const [currency, setCurrency] = useState("INR");
  const { rates, loading } = useExchangeRates("INR");

  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [months, setMonths] = useState("");
  const [emi, setEmi] = useState("");

  const { toggleTheme, mode } = useThemeContext();

  {
    emi && (
      <>
        <Typography variant="h6" sx={{ mt: 3 }}>
          Your EMI (INR): ₹ {emi}
        </Typography>

        <Select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          sx={{ mt: 2 }}
          fullWidth
        >
          {Object.keys(rates).map((curr) => (
            <MenuItem key={curr} value={curr}>
              {curr}
            </MenuItem>
          ))}
        </Select>

        {loading ? (
          <CircularProgress sx={{ mt: 2 }} />
        ) : (
          <Typography variant="h6" sx={{ mt: 2 }}>
            EMI in {currency}: {currency} {(emi * rates[currency]).toFixed(2)}
          </Typography>
        )}
      </>
    )
  }


  const handleCalculate = () => {
    const emiAmount = calculateEMI(parseFloat(principal), parseFloat(rate), parseInt(months));
    setEmi(emiAmount);
    const amortSchedule = generateSchedule(parseFloat(principal), parseFloat(rate), parseInt(months), emiAmount);
    setSchedule(amortSchedule);

  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <FormControlLabel
          control={
            <Switch checked={mode === "dark"} onChange={toggleTheme} />
          }
          label="Dark Mode"
        />
        <Typography variant="h4" gutterBottom>
          Loan EMI Calculator
        </Typography>

        <TextField
          fullWidth
          margin="normal"
          label="Principal Amount"
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Annual Interest Rate (%)"
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Loan Term (months)"
          type="number"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleCalculate}
        >
          Calculate EMI
        </Button>

        {emi && (
          <Typography variant="h6" sx={{ mt: 3 }}>
            Your EMI: ₹ {emi}
          </Typography>
        )}
 {schedule.length > 0 && (
        <>
          <Typography variant="h6" sx={{ mt: 4 }}>
            Amortization Schedule
          </Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Month</TableCell>
                <TableCell>Interest</TableCell>
                <TableCell>Principal</TableCell>
                <TableCell>Remaining Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schedule.map((row) => (
                <TableRow key={row.month}>
                  <TableCell>{row.month}</TableCell>
                  <TableCell>₹ {row.interest}</TableCell>
                  <TableCell>₹ {row.principal}</TableCell>
                  <TableCell>₹ {row.balance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
      </Paper>

     

    </Container>


  );
}

export default App;
