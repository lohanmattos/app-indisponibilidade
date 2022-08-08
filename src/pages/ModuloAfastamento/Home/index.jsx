import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Divider from '../../../components/Divider'
import Table from '../../../components/Table'

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BASE_URL from '../../../utils/request';

import './styless.css'

function Home() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  //Cria um objeto de nome e avatar da api
  const [afastamentos, setAfastamentos] = useState([])

  useEffect(() => {
    async function dataAPI() {
      handleToggle(true);
      const url = `${BASE_URL}/afastamentos`
      const response = await fetch(url);
      const data = await response.json();
      setAfastamentos(data);
      handleClose();

    }
    dataAPI();
  }, []);


  return (
    <div>
      <Navbar />
      <Divider title="" />
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Menu de Ações
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item"><Link className="nav-link" name="id" to={"/afastamento-cadastro"}>Cadastrar</Link></a></li>
          <li><a class="dropdown-item"><Link className="nav-link" name="id" to={"/afastamento-pesquisar"}>Buscar</Link></a></li>
          <li><a class="dropdown-item"><Link className="nav-link" name="id" to={"/afastamento-dashboard"}>Estatística</Link></a></li>
        </ul>
      </div>
      <h2>INDISPONIBILIDADES</h2>
      <Table dados={afastamentos} />
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="primary" />
      </Backdrop>
      <Footer />
    </div>
  )
}
export default Home
