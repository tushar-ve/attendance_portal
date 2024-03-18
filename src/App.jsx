import "./App.css";

import Login from "./auth/Login";
import Register from "./auth/Register";
import WebCam from "./components/webCam/WebCam";
import Dashboard from "./components/dashboard/Dashboard";
import Admin from "./components/admin/Admin";
import PrivateRoute from './PrivateRoute';
import Home from "./components/admin/components/home/Home";
import Employees from "./components/admin/components/employees/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path="/webcam" element={<WebCam />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin-dashboard" element={<Home />} />
            <Route path="/employees" element={<Employees />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
