//Importar as dependências
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Importar as páginas
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import ViewAfastamento from './pages/ViewAfastamento';
import EditAfastamento from './pages/EditAfastamento';
import Pesquisar from './pages/Pesquisar';
import Dashboard from './pages/Dashboard';
import CadastroUser from './pages/CadastroUser';
import ListarUser from './pages/ListarUser';

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


          <Route path="/efetivo-cadastrar-usuario/" element={<CadastroUser/>} />
          <Route path="/efetivo-listar-usuario/" element={<ListarUser/>} />
        </Routes>
      </BrowserRouter> 
    );
};

export default RoutesMain;
