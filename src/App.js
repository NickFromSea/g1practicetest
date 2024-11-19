import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./pages/Test";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
 return (
  <Router>
   <div className="App">
    <Navbar />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/test" element={<Test />} />
     <Route path="/aboutUs" element={<AboutUs />} />
    </Routes>
   </div>
  </Router>
 );
}

export default App;
