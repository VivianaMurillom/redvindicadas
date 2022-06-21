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
import Oportunidades from './pages/oportunidades/Oportunidades';
import Lineas from './pages/redes/lineas/Lineas';
import Asociados from './pages/redes/asociados/Asociados';
import Asociados1 from './pages/redes/asociados/Asociados1';
import Error404 from './pages/error404/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/redvindicadas/' element={<Home/>}></Route>
        <Route path='/redvindicadas/inicio' element={<Inicio/>}></Route>
        <Route path='/redvindicadas/juegayaprende' element={<Juegayaprende/>}></Route>
        <Route path='/redvindicadas/juegayaprende/recursos-adultos' element={<RecursoAdult/>}></Route>
        <Route path='/redvindicadas/juegayaprende/juegos-adultos' element={<JuegoAdult/>}></Route>
        <Route path='/redvindicadas/juegayaprende/recursos-jovenes1' element={<Jovenes1/>}></Route>
        <Route path='/redvindicadas/juegayaprende/recursos-jovenes2' element={<Jovenes2/>}></Route>
        <Route path='/redvindicadas/juegayaprende/recursos-jovenes3' element={<Jovenes3/>}></Route>
        <Route path='/redvindicadas/juegayaprende/juegos-jovenes' element={<JovenesJuegos/>}></Route>
        <Route path='/redvindicadas/kitfem' element={<Kitfem/>}></Route>
        <Route path='/redvindicadas/kitfem2' element={<Kitfem2/>}></Route>
        <Route path='/redvindicadas/kitfem3' element={<Kitfem3/>}></Route>
        <Route path='/redvindicadas/kitfem4' element={<Kitfem4/>}></Route>
        <Route path='/redvindicadas/kitfem/informate' element={<Informate/>}></Route>
        <Route path='/redvindicadas/oportunidades' element={<Oportunidades/>}></Route>
        <Route path='/redvindicadas/lineas' element={<Lineas/>}></Route>
        <Route path='/redvindicadas/asociados' element={<Asociados/>}></Route>
        <Route path='/redvindicadas/asociados1' element={<Asociados1/>}></Route>
        <Route path='*' element={<Error404/>}></Route>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

