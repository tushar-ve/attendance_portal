import "./App.css";

import Login from "./auth/Login";
import Register from "./auth/Register";
import WebCam from "../src/components/webCam/WebCam";
import Dashboard from "./components/dashboard/Dashboard";
import Counter from "./features/counter/Counter";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/webcam" element={<WebCam />} />
          <Route path="dashboard" element={<Dashboard />} />
  
        </Routes>
      </BrowserRouter>
      {/* <Counter /> */}
    </>
  );
}

export default App;
