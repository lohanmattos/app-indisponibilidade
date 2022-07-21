import { useForm } from 'react-hook-form';
import { useState } from 'react';

function FormCadastro() {

    //carrega function do componente useForm
    const { register, handleSubmit, } = useForm();

    //criar o objeto afastamento
    const [afastamento, setafastamento] = useState();

    //Recebe os dados do formulario
    function onSumbit(data) {
        //setafastamento(data);
        const url = "https://shrouded-plateau-27488.herokuapp.com/api";

        fetch(url, {
            method: "POST",
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

    return (
        <div className="container">
            <br />
            <form onSubmit={handleSubmit(onSumbit)}>
                <div className="mb-3">
                    <label htmlFor="nomeMilitar" className="form-label">Nome Do Militar</label>
                    <input required
                        type="text"
                        className="form-control"
                        placeholder="Ex: 3S BET FULANO"
                        {...register("nomeMilitar")}
                    />
                </div>
                <div className="row g-3">
                    <div className="col">
                        <label htmlFor="dataTermino">Data de Término</label>
                        <input type="date"
                            className="form-control"
                            placeholder="Inicio do Afastamento"
                            {...register("dataInicio")}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="dataTermino">Data de Término</label>
                        <input type="date"
                            name="dataFim"
                            id="dataFim"
                            className="form-control"
                            placeholder="Fim do Afastamento"
                            {...register("dataFim")}
                        />
                    </div>
                </div>
                <br />
                <button
                    type="submit"
                    className="btn btn-primary"
                >Salvar
                </button>
            </form>
        </div>
    )
}

export default FormCadastro