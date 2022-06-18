import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import Inicio from './pages/inicio/Inicio';
import Juegayaprende from './pages/juegayaprende/Juegayaprende';
import RecursoAdult from './pages/adultos/recursosA';
import JuegoAdult from './pages/adultos/JuegosA';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/inicio' element={<Inicio/>}></Route>
        <Route path='/juegayaprende' element={<Juegayaprende/>}></Route>
        <Route path='/juegayaprende/recursos-adultos' element={<RecursoAdult/>}></Route>
        <Route path='/juegayaprende/juegos-adultos' element={<JuegoAdult/>}></Route>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

