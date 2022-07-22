import * as React from 'react';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


import './styless.css'

function Table() {

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
            const url = "https://shrouded-plateau-27488.herokuapp.com/api"
            const response = await fetch(url);
            const data = await response.json();

            handleClose();
            setAfastamentos(data.afastamentos);
        }

        dataAPI();
    }, []);

    return (
        <div className="container">
            <br />

            <table className="table table-striped">
                <thead className=" table-dark">
                    <tr>
                        <th className="title-table" scope="col">Militar</th>
                        <th scope="col">Data Inicio</th>
                        <th scope="col">Data Término</th>
                        <th scope="col">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        afastamentos.map(afastamento => (
                            <tr key={afastamento.id}>                               
                                <td><strong>{afastamento.nomeMilitar}</strong></td>
                                <td>{afastamento.dataInicio}</td>
                                <td>{afastamento.dataFim}</td>
                                <td id="links">
                                        <Link id="links-list" to={`view/${afastamento.id}`}><i className="fa-solid fa-eye"></i></Link> 
                                        <Link id="links-list" to={`view/${afastamento.id}`}><i className="fa-solid fa-pen-to-square"></i></Link>                                                         
                                </td>
                            </tr>
                        ))
                    }
                        
                </tbody>
            </table>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

        </div>
    )
}

export default Table