import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./widgets";
import { Home, InvoiceDetails } from "./pages";
function App() {
  return (
    <div className="bg-lightGray dark:bg-veryDarkBlue h-screen">
      <Router>
        <Header />
        <Routes>
          <Route element={<Home />} path="*" />
          <Route element={<InvoiceDetails />} path="/invoice/:id" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
