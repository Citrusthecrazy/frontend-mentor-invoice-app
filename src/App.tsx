import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./widgets";
import { EditInvoice, Home, InvoiceDetails } from "./pages";
function App() {
  return (
    <div className="relative bg-lightGray dark:bg-veryDarkBlue h-screen overflow-y-auto">
      <Router>
        <Header />
        <Routes>
          <Route element={<InvoiceDetails />} path="/invoice/:id" />
          <Route element={<EditInvoice />} path="/invoice/:id/edit" />
          <Route element={<Home/>} path="/"/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
