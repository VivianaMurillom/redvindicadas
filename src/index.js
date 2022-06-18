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
import Jovenes1 from './pages/juegayaprende/jovenes/jovenes1/Jovenes1';
import Jovenes2 from './pages/juegayaprende/jovenes/jovenes2/Jovenes2';
import Jovenes3 from './pages/juegayaprende/jovenes/jovenes3/Jovenes3';
import JovenesJuegos from './pages/juegayaprende/jovenes/jovenes_juegos/JovenesJuegos';
import Kitfem from './pages/kitfem/Kitfem';
import Kitfem2 from './pages/kitfem/Kitfem2';
import Kitfem3 from './pages/kitfem/Kitfem3';
import Kitfem4 from './pages/kitfem/Kitfem4';
import Informate from './components/informate/formseries';

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
        <Route path='/juegayaprende/recursos-jovenes1' element={<Jovenes1/>}></Route>
        <Route path='/juegayaprende/recursos-jovenes2' element={<Jovenes2/>}></Route>
        <Route path='/juegayaprende/recursos-jovenes3' element={<Jovenes3/>}></Route>
        <Route path='/juegayaprende/juegos-jovenes' element={<JovenesJuegos/>}></Route>
        <Route path='/kitfem' element={<Kitfem/>}></Route>
        <Route path='/kitfem2' element={<Kitfem2/>}></Route>
        <Route path='/kitfem3' element={<Kitfem3/>}></Route>
        <Route path='/kitfem4' element={<Kitfem4/>}></Route>
        <Route path='/kitfem/informate' element={<Informate/>}></Route>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

