import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            body {
              background: black;
            }
          `,
    },
  },
});

export default theme;
/*
  
*/
