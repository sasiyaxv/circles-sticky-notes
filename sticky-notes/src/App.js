import { ThemeProvider } from "@emotion/react";
import theme from "@rebass/preset";
import { Routes } from "./Routes";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
