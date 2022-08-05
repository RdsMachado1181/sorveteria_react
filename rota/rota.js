import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import da pagina principal para exibição 
 import PaginaHome from '../Paginas/Home/Home'; 
import NossoSabores from '../Paginas/Nossos_Sabores/NossosSabores';
import  PaginaSobre from '../Paginas/PaginaSobre/PaginaSobre'; 

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      
      <Route  path='/' element={<  PaginaHome  />}/>
      <Route path='/sabores'  element={<  NossoSabores  />}/>
      <Route path='/PaginaSobre'  element={< PaginaSobre  />}/>

    </Routes>
  </BrowserRouter>
);

export default Rotas;