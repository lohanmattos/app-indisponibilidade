import { Link } from "react-router-dom";
import "./styless.css";

import logo from "/src/assets/pineapple.png"

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div id="logo">
                    <img src={logo} alt="" width={25} height={25} />
                    </div>
                    <p className="text-center">PineApple - Sistemas</p>
                    <p className="text-center">&copy; 3S BET LOHAN - 2022</p>
                    <div className="icon-rede-social"> 
                    <p class="mb-1">Coruja Gestor &copy; Sistema em Desenvolvimento. </p>
                    <p className="text-center"><a target="_blank" href="https://github.com/lohanmattos"><i class="fa-brands fa-github"></i></a></p>
                    <p className="text-center"><a target="_blank" href="https://www.linkedin.com/in/lohan-amendola-a09b93154/"><i class="fa-brands fa-linkedin"></i></a></p>
                    </div>
                    
                </div>

            </footer>

        </div>
    )
}

export default Footer