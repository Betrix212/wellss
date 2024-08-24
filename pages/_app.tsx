import "../styles/globals.css";

import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { generateString } from "../utils/generateString";

export const DataContext = createContext({} as any);

const theme = createTheme({
  typography: {
    fontFamily: `Wells Fargo Sans, Verdana, Arial, Helvetica, sans-serif`,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [data, setData] = useState({
    sessionId: generateString(10),
  });
  return (
    <DataContext.Provider value={{ data, setData }}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </DataContext.Provider>
  );
}

export default MyApp;
