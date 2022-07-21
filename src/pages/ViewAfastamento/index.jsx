import { useState } from "react"
import { useParams } from "react-router-dom";

function ViewAfastamento(){

    const url = "http://localhost:5500/api"

    const [nomeMilitar, setNomeMilitar] = useState()
    const [dataInicio, setDataInicio] = useState()
    const [dataFim, setDataFim] = useState()

    //recupera os paramentros vindo da url
    let params = useParams();

    function getUser(){      
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

    getUser()

    return(
        <div>
            <h1>Ola</h1>
            
            <h2>{nomeMilitar}</h2>
            <h2>{dataInicio}</h2>
            <h2>{dataFim}</h2>    

        </div>

    )
}

export default ViewAfastamento