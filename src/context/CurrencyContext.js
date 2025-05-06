// src/context/CurrencyContext.js
import React, { createContext, useState, useContext } from "react";

const CurrencyContext = createContext();

export const useCurrencyContext = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");

  const changeCurrency = (newCurrency) => setCurrency(newCurrency);

  return (
    <CurrencyContext.Provider value={{ currency, changeCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
