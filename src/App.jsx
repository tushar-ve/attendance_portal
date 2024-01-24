import './App.css'

import Login from './auth/Login';
import Register from './auth/Register';
import Counter from './features/counter/Counter';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      {/* <Counter /> */}
    </>
  );
}

export default App
