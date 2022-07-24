import BASE_URL from '../../utils/request';

function DeleteAfastamento(id){

        const confirmar = window.confirm("Deseja excluir");

        if(confirmar){
        fetch(`${BASE_URL}/${id}`, {
            method: "DELETE",
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

export default DeleteAfastamento;