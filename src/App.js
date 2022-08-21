import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import BannerUp from "./components/BannerUp/BannerUp";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/* <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes> */}
        <HomePage />
        <BannerUp />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
