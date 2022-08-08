import * as React from 'react';
import { Link } from "react-router-dom";
import { format, parseISO } from 'date-fns'

import './styless.css'

function Table({ dados }) {
    return (
        <div className="container">
            <table className="table table-striped">
                <thead className=" table-dark">
                    <tr>
                        <th className="title-table" scope="col">Militar</th>
                        <th scope="col">Data Inicio</th>
                        <th scope="col">Data Término</th>
                        <th scope="col">Motivo</th>
                        <th scope="col">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dados.map(afastamento => (
                            <tr key={afastamento.id}>
                                <td><strong>{afastamento.nome_militar}</strong></td>
                                <td>{format(new Date(parseISO(afastamento.dataInicio)), 'dd/MM/yyyy')}</td>
                                <td>{format(new Date(parseISO(afastamento.dataFim)), 'dd/MM/yyyy')}</td>
                                <td>{afastamento.categoria}</td>
                                <td id="links">
                                    <Link id="links-list" to={`/afastamento-visualizar/${afastamento.id}`}><i className="fa-solid fa-eye"></i></Link>
                                    <Link id="links-list" to={`/afastamento-editar/${afastamento.id}`}><i className="fa-solid fa-pen-to-square"></i></Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table