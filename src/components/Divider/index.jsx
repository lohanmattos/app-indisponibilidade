import "./styless.css"
import logo from "/src/assets/logo-fab.jpg"


function Divider(props){

    const data = new Date().toLocaleDateString('pt-br', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    })

    return(
        <div id="divider" className=" bg-dark text-secondary px-2 py-6 text-center">
               <img src={logo} width={80} />
                <div className="py-6">                 
                    <h1 className="display-4 fw-bold text-white">{props.title}</h1>
                    <div className="col-lg-4 mx-auto">
                    {/*<p className="fs-5 mb-4 text-white">Esse Sistema visa informar a indisponibilidade de Pessoal.</p>*/}
                        <p className="fs-5 mb-4 text-white" >Data: {data}</p>        
                    </div>
                </div>
        </div>
    )
    
}

export default Divider