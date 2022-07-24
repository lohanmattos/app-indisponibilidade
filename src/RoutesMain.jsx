//Importar as dependências
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Importar as páginas
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import ViewAfastamento from './pages/ViewAfastamento';
import EditAfastamento from './pages/EditAfastamento';

//Criar o componentes com as rotas
function RoutesMain(){
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/view/:id" element={<ViewAfastamento />} />
          <Route path="/edit/:id" element={<EditAfastamento />} />
        </Routes>
      </BrowserRouter> 
    );
};

export default RoutesMain;
