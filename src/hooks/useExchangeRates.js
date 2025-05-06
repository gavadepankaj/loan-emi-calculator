// src/hooks/useExchangeRates.js
import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "004038ad854c60941bdf3d8b"; // Replace this with your real key

export const useExchangeRates = (base = "INR") => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await axios.get(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${base}`
        );
        setRates(res.data.conversion_rates);
      } catch (err) {
        setError("Failed to fetch rates.");
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [base]);

  return { rates, loading, error };
};
