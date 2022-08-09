import { useForm } from 'react-hook-form';
import BASE_URL from '../../../utils/request';
import axios from "axios";

import "./styles.css"
import { useState } from 'react';
import Navbar from '../../../components/Navbar';

import Divider from '../../../components/Divider';
import Footer from '../../../components/Footer';

function CadastroUser() {
    //carrega function do componente useForm
    const { register, handleSubmit, reset } = useForm();

    //Recebe os dados do formulario
    function onSumbit(data) {
        axios.post(`${BASE_URL}/user`, data)
            .then(response => {
                if (response.status === 200) {
                    const alerta_sucesso = document.getElementById('alert-sucesso');
                    alerta_sucesso.classList.add('alert_visible')
                }
                else if (!response.status === 404) {
                    console.error(data)
                }
            })
            .catch(e => console.error(e))
    }

    return (
        <>
        <Navbar/>
        <Divider title="Modulo Efetivo"/>
        <div className="container">
            <br />
            <h2>CADASTRAR NOVO USUÁRIO</h2>
            <div id="alert-sucesso" className="alert alert-success" role="alert">
                Usuário cadastrado com sucesso.
            </div>
            <div id='form'>
            <form onSubmit={handleSubmit(onSumbit)}>
                <div className="mb-3">
                    <label className="form-label">Nome Do Militar</label>
                    <input type="text" 
                    className="form-control" 
                    placeholder="Nome Do Militar"
                    {...register("username", { required: true })}
                    />                   
                </div>

            
                <div className="mb-3">
                    <label htmlFor="descricao" className="form-label">Email</label>
                    <input className="form-control"
                        placeholder='email'
                        {...register("email", { required: true })}
                    />
                </div>

                <div className="row g-3">
                    <div className="col">
                        <label htmlFor="dataInicio">Senha</label>
                        <input type="password"
                            className="form-control"
                            placeholder="senha"
                            {...register("password", { required: true })}
                        />
                    </div>

                </div>
                <div className="form-button">
                <button
                    type="submit"
                    className="btn btn-primary"
                >Cadastrar
                </button> 
                </div>                 
            </form>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default CadastroUser;