import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import Inicio from './pages/inicio/Inicio';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/inicio' element={<Inicio/>}></Route>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

