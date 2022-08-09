import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import Navbar from "../../../components/Navbar";
import Divider from "../../../components/Divider";
import Footer from "../../../components/Footer";

import BASE_URL from '../../../utils/request';
import { parseISO } from 'date-fns'

import "./styless.css"

function ViewAfastamento() {

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };


    const [afastamento, setAfastamento] = useState({})

    //recupera os paramentros vindo da url
    let params = useParams();

    useEffect(() => {
        const idAfastamento = params.id;

        async function dataAPI() {
            handleToggle(true);
            const url = `${BASE_URL}/afastamentos/${idAfastamento}`
            const response = await fetch(url);
            const data = await response.json();

            setAfastamento(data);
            handleClose();
            
        }
        dataAPI();

    }, []);

    return (
        <div>
            <Navbar />
            <Divider />
            <div className="container">
                <h2>MILITAR INDISPONÍVEL</h2>
                
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Data Inicio</th>
                            <th scope="col">Data Término</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={afastamento.nome_militar}>                    
                            <th>{afastamento.nome_militar}</th>
                            <td>{afastamento.dataInicio === undefined ? ' ' : new Date(parseISO(afastamento.dataInicio)).toLocaleDateString()}</td>
                            <td>{afastamento.dataFim === undefined ? ' ' : new Date(parseISO(afastamento.dataFim)).toLocaleDateString()}</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Motivo</th>
                            <th scope="col">Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{afastamento.categoria}</th>
                            <td>{afastamento.descricao}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <p>Data: <strong>{afastamento.created_at === undefined ? ' ' : new Date(parseISO(afastamento.created_at)).toLocaleDateString()}</strong></p>
                    <p>Hora: <strong>{afastamento.created_at === undefined ? '' : new Date(parseISO(afastamento.created_at)).toTimeString()}</strong></p>
                </div>
                
                <div className="footer">
                    <button className="btn btn-primary" onClick={window.print} ><i className="fa-solid fa-print"></i></button>
                </div>
            </div>
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

export default ViewAfastamento