import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Api from "./components/Api";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Setcount from "./components/Setcount";
import Showname from "./components/Showname";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Api" element={<Api />}></Route>
        <Route path="/Showname" element={<Showname />}></Route>
        <Route path="/Setcount" element={<Setcount />}></Route>
      </Routes>
    </>
  );
};

export default App;
