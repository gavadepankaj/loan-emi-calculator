// src/pages/NotFound.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Box textAlign="center" mt={10}>
      <Typography variant="h3" color="error">
        404 - Page Not Found
      </Typography>
      <Typography variant="subtitle1">
        Sorry, the page you're looking for doesn't exist.
      </Typography>
    </Box>
  );
};

export default NotFound;
