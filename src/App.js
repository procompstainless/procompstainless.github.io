import React from "react";

// style imports
import { ThemeProvider } from "@emotion/react";
import theme from "./themes/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routing/router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
