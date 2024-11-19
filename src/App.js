
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import User from "./User";
import Beranda from "./Beranda";
import Props from "./Props";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/User" element={<User />} />
        <Route path="/Beranda" element={<Beranda />} />
        <Route path="/Props" element={<Props />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
