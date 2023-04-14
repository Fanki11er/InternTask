import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import theme from "./Theme/theme";
import { LocalizationProvider } from "@mui/x-date-pickers";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>,
  rootElement
);

// Todo: Create redux
// Todo: Add item
// Todo: Remove item
// Todo: Edit item
// Todo: 404 page
// Todo: Add language change logic
// Todo: Net, four reusable components in row
