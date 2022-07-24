import { useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Divider from "../../components/Divider";
import Footer from "../../components/Footer";

import "./styless.css"

function ViewAfastamento() {

    const url = "https://shrouded-plateau-27488.herokuapp.com/api"

    const [nomeMilitar, setNomeMilitar] = useState()
    const [dataInicio, setDataInicio] = useState()
    const [dataFim, setDataFim] = useState()

    //recupera os paramentros vindo da url
    let params = useParams();

    function getUser() {
        const idAfastamento = params.id;

        fetch(`${url}/${idAfastamento}`)
            .then(response => response.json())
            .then(data => {
                setNomeMilitar(data.nomeMilitar),
                    setDataInicio(data.dataInicio),
                    setDataFim(data.dataFim)
            })
            .catch(err => console.error(err));
    }

    getUser()

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
                        <tr>
                            <th>{nomeMilitar}</th>
                            <td>{dataInicio}</td>
                            <td>{dataFim}</td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Motivo</th>
                            <th scope="col">Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Curso</th>
                            <td>Realizar o Curso RAD025, no CINDACTA I</td>
                        </tr>
                    </tbody>
                </table>
                <div className="footer">
                <button className="btn btn-primary" onClick={window.print} ><i class="fa-solid fa-print"></i></button>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default ViewAfastamento