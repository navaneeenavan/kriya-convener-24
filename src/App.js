import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/tailwind.output.css";
import React from "react";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import PortalWrapper from "./pages/PortalWrapper";
import ApplyAttendance from "./pages/ApplyAttendance";
import ListAttendance from "./pages/ListAttendance";

const App = () => {
  return (
    <React.Fragment>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<PortalWrapper />}>
            <Route index element={<h1>Dashboard</h1>} />
            <Route path="apply-attendance" element={<ApplyAttendance />} />
            <Route path="list-attendance" element={<ListAttendance />} />
            <Route path="*" element={<h1>404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
