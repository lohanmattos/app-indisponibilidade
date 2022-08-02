import Navbar from "../../components/Navbar"
import Divider from "../../components/Divider"
import Footer from "../../components/Footer"
import { useForm } from "react-hook-form";
import { useState } from "react"

import './styles.css'

import BASE_URL from '../../utils/request';
import { format, parseISO } from 'date-fns'

function Pesquisar() {

    const [afastamentos, setAfastamentos] = useState([{}])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const url = `${BASE_URL}/afastamentos/filtro/${data.dataInicio}/${data.dataFim}`
        fetch(url)
            .then(response => response.json())
            .then(data => setAfastamentos(data))
    }
    return (
        <div>
            <Navbar />
            <Divider />
            <div className="container">
            <h2>PESQUISAR INDISPONIBILIDADE</h2>
                <form id="form-pesquisar" className="row row-cols-lg-auto g-3 align-items-center" onSubmit={handleSubmit(onSubmit)}>
                    <label>De:</label>
                    <div classname="col-12">
                        <input type="date"
                            className="form-control"
                            {...register("dataInicio")}
                        />
                    </div>
                    <label>Até:</label>
                    
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
                                    <th>{afastamento.dataInicio}</th>
                                    <th>{afastamento.dataFim}</th>
                                    <th>{afastamento.categoria}</th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <Footer />
        </div>
    )
}

export default Pesquisar