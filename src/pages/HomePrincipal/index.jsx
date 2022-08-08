import { Link } from "react-router-dom";
import Divider from "../../components/Divider";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar"

import './styles.css'

function HomePrincipal() {
    return (
        <div>
            <Navbar/>
            <main>
                <Divider title="Destacamento de Controle do Espaço Aéreo de Sinop" />
                <div class="album py-5 bg-light">
                    <div class="container">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <div class="col">
                                <div class="card shadow-sm">
                                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Modulo Efetivo</text></svg>

                                    <div class="card-body">
                                        <p class="card-text"></p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <Link to={"efetivo-home"}><button type="button" class="btn btn-primary">Acessar</button></Link>
                                            </div>
                                            <small class="text-muted"></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card shadow-sm">
                                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Modulo Afastamento</text></svg>

                                    <div class="card-body">
                                        <p class="card-text"></p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <Link to={"afastamento-home"}><button type="button" class="btn btn-primary">Acessar</button></Link>                                            </div>
                                            <small class="text-muted"></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
         <Footer/>
        </div>
    )

}

export default HomePrincipal;