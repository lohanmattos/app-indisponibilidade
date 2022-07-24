import { useForm } from 'react-hook-form';
import BASE_URL from '../../utils/request';

import "./styless.css"

function FormCadastro() {
    //carrega function do componente useForm
    const { register, handleSubmit} = useForm();

    //Recebe os dados do formulario
    function onSumbit(data) {

        const confirmar = window.confirm(`
            Confirme os dados abaixo: 
            Nome: ${data.nomeMilitar}
            Periodo: ${data.dataInicio} a ${data.dataFim}`
        );

        if (confirmar) {

            fetch(BASE_URL, {
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

        
    }

    return (
        <div className="container">
            <br />
            <h2>CADASTRAR INDISPONIBILIDADE</h2>
            <form onSubmit={handleSubmit(onSumbit)}>
                <div className="mb-3">
                    <label htmlFor="nomeMilitar" className="form-label">Nome Do Militar</label>
                    <input required
                        type="text"
                        className="form-control"
                        placeholder="Ex: 3S BET FULANO"
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
            </form>
        </div>
    )
}
export default FormCadastro