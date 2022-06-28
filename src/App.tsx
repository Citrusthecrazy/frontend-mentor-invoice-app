import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./widgets";
import { Home } from "./pages";
function App() {
  return (
    <div className="bg-lightGray h-screen">
      <Router>
        <Header />
        <Routes>
          <Route element={<Home />} path="*" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
