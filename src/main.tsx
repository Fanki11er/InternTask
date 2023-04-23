import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import theme from "./Theme/theme";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import i18n from "./I18n/i18n";
import { I18nextProvider } from "react-i18next";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </I18nextProvider>
      </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>,
  rootElement
);
