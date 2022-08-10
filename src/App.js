import "./App.css";
import HomePage from "./home/Homepage";
import theme from "./themes";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import PhotosPage from "./photos/photos_page";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
<BrowserRouter>
    <Routes>
      <Route path="/home/" element={<HomePage/>}/>
      <Route path="/photos" element={<PhotosPage/>}/>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </div>
  );
}
export default App;
