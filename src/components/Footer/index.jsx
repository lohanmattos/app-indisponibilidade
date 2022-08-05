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
                    <p className="text-center">&copy; 3S BET LOHAN - 2022 </p>
                </div>
            </footer>

        </div>
    )
}

export default Footer