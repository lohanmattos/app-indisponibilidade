import * as React from 'react';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { format, compareAsc } from 'date-fns'

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

    function formatData(datastring) {
        
    }

    return (
        <div className="container">
            <br />
            <h2>INDISPONIBILIDADES</h2>
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
                                <td>{format(new Date(afastamento.dataInicio), 'dd/MM/yyyy')}</td>       
                                <td>{format(new Date(afastamento.dataFim), 'dd/MM/yyyy')}</td>
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