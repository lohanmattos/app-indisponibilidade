import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="">
 <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Coruja - Gestor</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link " to={"/"}>Página Inicial</Link> 
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" name="id" to={"/cadastro"}>Cadastrar Indis.</Link>         
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" name="id" to={"/pesquisar"}>Relatórios</Link>         
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar