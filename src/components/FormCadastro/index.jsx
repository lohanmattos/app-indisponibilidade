import { useForm } from 'react-hook-form';
import BASE_URL from '../../utils/request';
import axios from "axios";

import "./styless.css"
import { useState } from 'react';

function FormCadastro() {
    //carrega function do componente useForm
    const { register, handleSubmit, reset } = useForm();

    //array usuarios
    const [militares, setMilitares] = useState([
        '1T ALINE SOUZA',
        'SO SAD AZEREDO',
        'SO SEM MEIRELES',
        "1S SGS JOEL",
        "2S BET BANDEIRA",
        "2S BET GONÇALVES",
        "2S SEL COUTINHO",
        "3S BET LOHAN",
        "3S SGS PAULO MACEDO"
    ])

    //Recebe os dados do formulario
    function onSumbit(data) {
        axios.post(`${BASE_URL}/afastamentos/criar`, data)
            .then(response => {
                if (response.status === 200) {
                    const alerta_sucesso = document.getElementById('alert-sucesso');
                    alerta_sucesso.classList.add('alert_visible')
                }
                else if (!response.status === 404) {
                }
            })
            .catch(e => console.error(e))
    }

    return (
        <div className="container">
            <br />
            <h2>CADASTRAR INDISPONIBILIDADE</h2>
            <div id="alert-sucesso" className="alert alert-success" role="alert">
                Indisponibilidade cadastrada com sucesso.
            </div>
            <form onSubmit={handleSubmit(onSumbit)}>
                <div className="mb-3">
                    <label htmlFor="nomeMilitar" className="form-label">Nome Do Militar</label>
                    <select className="form-select"
                        {...register("nome_militar", { required: true })}>
                        {militares.map(militar => (
                            <option value={militar} key={militar}>{militar}</option>
                        ))
                        }
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="motivo" className="form-label">Motivo</label>
                    <select className="form-select"
                        aria-label="Default select example"
                        {...register("categoria", { required: true })}
                    >
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
                    <textarea className="form-control"
                        placeholder='DESCREVA O MOTIVO DA INDISPONIBILIDADE'
                        rowsid="descricao" rows="5"
                        {...register("descricao", { required: true })}
                    />
                </div>

                <div className="row g-3">
                    <div className="col">
                        <label htmlFor="dataInicio">Data de Inicio</label>
                        <input type="date"
                            className="form-control"
                            placeholder="Inicio do Afastamento"
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
                            {...register("dataFim", { required: true })}
                        />
                    </div>
                </div>
                <br />
                <button
                    type="submit"
                    className="btn btn-primary"

                >Cadastrar
                </button>
                <input
                    type="button"
                    className="btn btn-danger"
                    onClick={() =>
                        reset({
                            nomeMilitar: " ",
                            dataInicio: " ",
                            dataFim: " "
                        })
                    }
                    value="Limpar"
                />
            </form>
        </div>
    )
}
export default FormCadastro