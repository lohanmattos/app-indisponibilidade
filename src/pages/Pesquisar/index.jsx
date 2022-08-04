import * as React from 'react';
import Navbar from "../../components/Navbar"
import Divider from "../../components/Divider"
import Footer from "../../components/Footer"
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react"

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import './styles.css'

import BASE_URL from '../../utils/request';
import { parseISO } from 'date-fns'

function Pesquisar() {

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const [afastamentos, setAfastamentos] = useState([{}])

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        handleToggle(true);
        const url = `${BASE_URL}/afastamentos/filtro/${data.dataInicio}/${data.dataFim}`
        fetch(url)
            .then(response => response.json())
            .then(data => setAfastamentos(data))
    }


    useEffect(
        () => {
            handleClose();
        },
        [afastamentos],
      );

    return (
        <div>
            <Navbar />
            <Divider />
            <div className="container">
            <h2>PESQUISAR INDISPONIBILIDADE</h2>
                <form id="form-pesquisar" className="row row-cols-lg-auto g-3 align-items-center" onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-label"><strong>De:</strong></label>

                    <div classname="col-12">
                        <input type="date"
                            className="form-control"
                            {...register("dataInicio")}
                        />
                    </div>
                    <label className="form-label"><strong>Até:</strong></label>
                    
                    <div className="col-12">
                        
                        <input type="date"
                            className="form-control"
                            {...register("dataFim", { required: true })}

                        />                        
                    </div>

                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Pesquisar</button>
                    </div>
                    {errors.dataFim && <span>Campo Obrigatório</span>}
                </form>
                <table className="table table-striped">
                    <thead className=" table-dark">
                        <tr>
                            <th className="title-table" scope="col">Militar</th>
                            <th scope="col">Data Inicio</th>
                            <th scope="col">Data Término</th>
                            <th scope="col">Motivo do Afastamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            afastamentos.map(afastamento => (

                                <tr key={afastamento.id + 1}>
                                    <th>{afastamento.nome_militar}</th>
                                    <th>{afastamento.dataInicio === undefined ? ' ' : new Date(parseISO(afastamento.dataInicio)).toLocaleDateString()}</th>                        
                                    <th>{afastamento.dataFim === undefined ? ' ' : new Date(afastamento.dataFim).toLocaleDateString()}</th>
                                    <th>{afastamento.categoria}</th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="footer">
                    <button className="btn btn-primary" onClick={window.print} ><i className="fa-solid fa-print"></i></button>
            
                </div>
                
            <Footer />
            <Backdrop
                sx={{ color: '#000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="success"/>
            </Backdrop>
        </div>
    )
}

export default Pesquisar