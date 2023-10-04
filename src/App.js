import React from "react";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import History from "./components/History";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Search/>} />
        <Route path="/history" element={<History />} />
        <Route path="/search/:word" element={<Search/>} />
       
      </Routes>
    </div>
  );
};
export default App;
