// src/hooks/calculateEMI.js

export const calculateEMI = (principal, interestRate, months) => {
  const R = interestRate / 12 / 100; // Monthly interest rate
  const N = months; // Loan duration in months

  const EMI =
    (principal * R * Math.pow(1 + R, N)) /
    (Math.pow(1 + R, N) - 1);

  return EMI ? EMI.toFixed(2) : "0.00";
};
