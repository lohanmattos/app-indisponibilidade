import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useParams } from "react-router-dom";

import DeleteAfastamento from '../DeleteAfastamento';

import './styless.css'

function FormEdit(){

    const url = "https://shrouded-plateau-27488.herokuapp.com/api"

    const [nomeMilitar, setNomeMilitar] = useState("")
    const [dataInicio, setDataInicio] = useState("")
    const [dataFim, setDataFim] = useState("")

    //recupera os paramentros vindo da url
    let params = useParams();

    function updateAfastamento() {
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

    updateAfastamento()

    //carrega function do componente useForm
    const { register, handleSubmit} = useForm();

    //Recebe os dados do formulario
    function onSumbit(data) {

            const id = params.id;

            //setafastamento(data);
            const url = "https://shrouded-plateau-27488.herokuapp.com/api";

            const confirmar = window.confirm(`
            Confirme os dados abaixo: 
            Nome: ${data.nomeMilitar}
            Periodo: ${data.dataInicio} a ${data.dataFim}`
        );

        if(confirmar){

            fetch(`${url}/${id}`, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "content-type": "application/json; charset=utf-8"
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);

                })
                .catch(err => console.error(err))

        }
    }

    function Deletar(){
        if(DeleteAfastamento(params.id)){
            alert("Afastamento Deletado com Sucesso.")
        }
        console.log("Deletar");
    }

    return (
        <div className="container">
        <br />
        <h2>EDITAR INDISPONIBILIDADE</h2>
        <form onSubmit={handleSubmit(onSumbit)}>
            <div className="mb-3">
                <label htmlFor="nomeMilitar" className="form-label">Nome Do Militar</label>
                <input required
                    type="text"
                    className="form-control"
                    placeholder="Ex: 3S BET FULANO"
                    defaultValue={nomeMilitar}
                    {...register("nomeMilitar", { required: true })} />

            </div>

            <div className="mb-3">
                <label htmlFor="motivo" className="form-label">Motivo</label>
                <select className="form-select" aria-label="Default select example">

                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="descricao" className="form-label">Descrição</label>
                <textarea className="form-control" placeholder='DESCREVA O MOTIVO DA INDISPONIBILIDADE' rowsid="descricao" rows="5"></textarea>
            </div>

            <div className="row g-3">
                <div className="col">
                    <label htmlFor="dataInicio">Data de Inicio</label>
                    <input type="date"
                        className="form-control"
                        placeholder="Inicio do Afastamento"
                        defaultValue={dataInicio}
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
                        defaultValue={dataFim}
                        {...register("dataFim", { required: true })}
                    />
                </div>
            </div>
           <div class="form-button">
            <button
                type="submit"
                className="btn btn-primary"
            >Cadastrar
            </button>    
            <button
                type="button"
                className="btn btn-danger"
                onClick={Deletar}
                >Excluir
                
        </button>    
        </div>
        </form>

    </div>
      
    )
}

export default FormEdit