import "./App.css";
import HomePage from "./home/Homepage";
import theme from "./themes";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HomePage/>
      </ThemeProvider>
    </div>
  );
}
export default App;
