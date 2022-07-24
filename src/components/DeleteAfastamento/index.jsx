import BASE_URL from '../../utils/request';
import axios from "axios";

function DeleteAfastamento(id){

        const confirmar = window.confirm("Deseja excluir");

        if(confirmar){
            axios.delete(`${BASE_URL}/${id}`)
            .then(response => {
                //
            })
            .catch(e => console.error(e));

        }
}

export default DeleteAfastamento;