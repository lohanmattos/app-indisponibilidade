import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Divider from "../../components/Divider";
import Footer from "../../components/Footer";

import BASE_URL from '../../utils/request';
import { parseISO } from 'date-fns'

import "./styless.css"

function ViewAfastamento() {

    const [afastamento, setAfastamento] = useState({})

    //recupera os paramentros vindo da url
    let params = useParams();

    useEffect(() => {
        const idAfastamento = params.id;

        async function dataAPI() {
            const url = `${BASE_URL}/afastamentos/${idAfastamento}`
            const response = await fetch(url);
            const data = await response.json();

            setAfastamento(data);
            
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
                            <td>{new Date(parseISO(afastamento.dataInicio)).toLocaleDateString()}</td>
                            <td>{new Date(parseISO(afastamento.dataFim)).toLocaleDateString()}</td>
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
                <div className="footer">
                    <button className="btn btn-primary" onClick={window.print} ><i className="fa-solid fa-print"></i></button>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default ViewAfastamento