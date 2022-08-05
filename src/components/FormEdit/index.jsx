import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import BASE_URL from '../../utils/request';
import './styless.css'

function FormEdit() {

    const [afastamento, setAfastamento] = useState({})

    //recupera os paramentros vindo da url
    let params = useParams();

    useEffect(() => {
        async function dataApi() {
            const idAfastamento = params.id;

            const url = `${`${BASE_URL}/afastamentos/${idAfastamento}`}`
            const response = await fetch(url);
            const data = await response.json();

            if (response.status === 200) {
                setAfastamento(data);
            }
            else if (response.status === 404) {
                console.error(response.status);
            }
        }
        dataApi();

    }, []);


    function DeletarAfastamento(){
        const id = params.id;

        axios.delete(`${BASE_URL}/afastamentos/${id}`)
        .then(response => { 
            if (response.status === 200) {
               //console.log(response.status);
               const alerta = document.getElementById('alert-deletar');
                alerta.classList.add('alert_visible');
                alerta.classList.add('alert-danger');
            }
        })
        .catch(e => console.error(e));
    ;}

    //carrega function do componente useForm
    const { register, handleSubmit } = useForm();

    //Recebe os dados do formulario
    function onSumbit(data) {
        const id = params.id;
        axios.put(`${BASE_URL}/afastamentos/editar/${id}`, data)
            .then(response => {
                console.log(response);
                const alerta = document.getElementById('alert');
                alerta.classList.add('alert_visible');
                
            })
            .catch(e => console.error(e));
            alerta.classList.add('alert_visible');
            alerta.classList.add('alert-danger');
    }

    return (
        <div className="container">
            <br />
            <h2>EDITAR INDISPONIBILIDADE</h2>
            <div id='alert' className="alert alert-success" role="alert">
            Indisponibilidade Alterada com sucesso.
            </div>
            <div id='alert-deletar' className="alert alert-success" role="alert">
            Indisponibilidade deletada com sucesso.
            </div>
            <div id='form'>
            <form onSubmit={handleSubmit(onSumbit)}>
                <div className="mb-3">
                    <label htmlFor="nomeMilitar" className="form-label">Nome Do Militar</label>
                    <input required
                        type="text"
                        className="form-control"
                        placeholder="Ex: 3S BET FULANO"
                        defaultValue={afastamento.nome_militar}
                        {...register("nome_militar", { required: true })} />

                </div>
                <div className="mb-3">
                    <label htmlFor="motivo" className="form-label">Motivo</label>
                    <select className="form-select"
                        aria-label="Default select example"
                        {...register("categoria", { required: true })}
                    >
                        <option value={afastamento.categoria}>{afastamento.categoria}</option>
                        <option value="Ferias">Férias</option>
                        <option value="Curso">Curso</option>
                        <option value="Instalação">Instalação</option>
                        <option value="Reunião de Comando">Reunião de Comando</option>
                        <option value="Comissonamento">Comissonamento</option>
                        <option value="Inspeção de Saúde">Inspeção de Saúde</option>
                        <option value="Outros">Outros</option>
                    </select>

                </div>

                <div className="mb-3">
                    <label htmlFor="descricao" className="form-label">Descrição</label>
                    <textarea
                        className="form-control"
                        placeholder='DESCREVA O MOTIVO DA INDISPONIBILIDADE'
                        rowsid="descricao" rows="5"
                        defaultValue={afastamento.descricao}
                        {...register("descricao", { required: true })}
                    />
                </div>

                <div className="row g-3">
                    <div className="col">
                        <label htmlFor="dataInicio">Data de Inicio</label>
                        <input type="date"
                            className="form-control"
                            placeholder="Inicio do Afastamento"
                            defaultValue={afastamento.dataInicio}
                            {...register("dataInicio", { required: true })}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="dataTermino">Data de Término</label>
                        <input type="date"
                            name="dataFim"
                            id="dataFim"
                            className="form-control"
                            placeholder="Fim do Afastamento"
                            defaultValue={afastamento.dataFim}
                            {...register("dataFim", { required: true })}
                        />
                    </div>
                </div>
                <div className="form-button">
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >Salvar
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={DeletarAfastamento}
                    >Excluir
                    </button>
                </div>
            </form>
            </div>
        </div>

    )
}

export default FormEdit