//Importar as dependências
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Importar as páginas
import Home from './pages/ModuloAfastamento/Home';
import Cadastro from './pages/ModuloAfastamento/Cadastro';
import ViewAfastamento from './pages/ModuloAfastamento/ViewAfastamento';
import EditAfastamento from './pages/ModuloAfastamento/EditAfastamento';
import Pesquisar from './pages/ModuloAfastamento/Pesquisar';
import Dashboard from './pages/ModuloAfastamento/Dashboard';


import CadastroUser from './pages/ModuloEfetivo/CadastroUser';
import ListarUser from './pages/ModuloEfetivo/ListarUser';

import HomePrincipal from './pages/HomePrincipal';

//Criar o componentes com as rotas
function RoutesMain(){
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePrincipal />} />
          <Route path="/afastamento" element={<Home />} />
          <Route path="/afastamento-cadastro" element={<Cadastro />} />
          <Route path="/afastamento-visualizar/:id" element={<ViewAfastamento />} />
          <Route path="/afastamento-editar/:id" element={<EditAfastamento />} />
          <Route path="/afastamento-pesquisar/" element={<Pesquisar/>} />
          <Route path="/afastamento-dashboard/" element={<Dashboard/>} />


          <Route path="/efetivo-cadastrar" element={<CadastroUser/>} />
          <Route path="/efetivo/" element={<ListarUser/>} />
        </Routes>
      </BrowserRouter> 
    );
};

export default RoutesMain;
