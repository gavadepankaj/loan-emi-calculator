// src/components/Navbar.js
import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { useThemeContext } from "../context/ThemeContext";
import { useCurrencyContext } from "../context/CurrencyContext";

const Navbar = () => {
  const { toggleTheme } = useThemeContext();
  const { currency, changeCurrency } = useCurrencyContext();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Loan Calculator</Typography>
        <IconButton color="inherit" onClick={toggleTheme}>
          Toggle Theme
        </IconButton>
        <select onChange={(e) => changeCurrency(e.target.value)} value={currency}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          {/* Add more currencies as needed */}
        </select>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
