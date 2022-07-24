import "./styless.css"

function Divider(){

    const data = new Date().toLocaleDateString('pt-br', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    })

    return(
        <div id="divider" className=" bg-dark text-secondary px-2 py-4 text-center">
                <div className="py-2">  
                    <h1 className="display-4 fw-bold text-white">Módulo Indisponibilidade</h1>
                    <div className="col-lg-4 mx-auto">
                    <p className="fs-5 mb-4">Esse Sistema visa informar a indisponibilidade de Pessoal.</p>
                        <h5>Data: {data}</h5>        
                    </div>
                </div>
        </div>
    )
}

export default Divider