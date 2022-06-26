import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./widgets";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route element={<div>Hello</div>} path="*" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
