import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <Link to={"/"}>  <a class="navbar-brand">Coruja</a></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to={"efetivo-home"}><a class="nav-link active">Efetivo</a></Link>
                        <Link to={"afastamento-home"}><a class="nav-link active">Afastamento</a></Link>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    )
}


export default Navbar