
function DeleteAfastamento(id){
        //setafastamento(data);
        const url = "https://shrouded-plateau-27488.herokuapp.com/api";

        const confirmar = window.confirm("Deseja excluir");

        if(confirmar){
        fetch(`${url}/${id}`, {
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