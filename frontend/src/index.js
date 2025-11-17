import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a dark theme using MUI
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// Render the App component within the ThemeProvider to apply the dark theme
// and CssBaseline for consistent styling
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
