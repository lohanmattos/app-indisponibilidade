import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import BASE_URL from '../../utils/request';

import './styles.css'
import Navbar from '../../components/Navbar';

function ListarUser() {

    const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTY1OTgzMTcxNH0.8cMJVtn_Qxh5ybMUdYPTlRymZMNaqJ73QXdSxzVts2s"

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
            handleToggle(true);
            axios.get(`${BASE_URL}/user`, {
                headers: {
                  'Authorization': `bearer ${access_token}`
                }
              })
              .then((res) => {
                setAfastamentos(res.data);
              })
              .catch((error) => {
                console.error(error)
              })

            handleClose();
    }, []);

    return (
        <>
         <Navbar/>
        <div className="container">

            <br />
            <h2>Efetivo</h2>
            <table className="table table-striped">
                <thead className=" table-dark">
                    <tr>
                        <th className="title-table" scope="col">Militar</th>
                        <th scope="col">Email</th>
                        <th scope="col">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        afastamentos.map(afastamento => (
                            <tr key={afastamento.id}>
                                <td><strong>{afastamento.username}</strong></td>
                                <td>{afastamento.email}</td>
                                <td id="links">
                                    <Link id="links-list" to={`view/${afastamento.id}`}><i className="fa-solid fa-eye"></i></Link>
                                    <Link id="links-list" to={`edit/${afastamento.id}`}><i className="fa-solid fa-pen-to-square"></i></Link>
                                </td>
                            </tr>
                        ))

                    }

                </tbody>
            </table>

            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="primary" />
            </Backdrop>
        </div>
        </>
    )
}

export default ListarUser;