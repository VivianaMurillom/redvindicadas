import "./NavAdultos.css"
import linea from "../../pages/adultos/img/adul-linea.svg"
import libro from "../../pages/juegayaprende/img/libro1.png"
import rompecabeza from "../../pages/juegayaprende/img/image62.png"
import { Link } from "react-router-dom";
function NavAdult(){
    return(
        <div className="container-barnav">
            <div className="container-titlebar">
                <h1 className="h1-barra">Recursos de Padres y Adultos</h1>
            </div>
            <div className="barnav-recursosyjuegos">
                    <div className="barnav-interna">
                        <img className="img-menu" src={libro} alt=""/>
                        <Link className="button-adult" to="/redvindicadas/juegayaprende/recursos-adultos">Recursos</Link>
                    </div>
                <img className="imglinea-nav" src={linea} alt=""/>
                    <div className="barnav-interna">
                            <img className="img-menu" src={rompecabeza} alt=""/>
                            <Link className="desactive" to="/redvindicadas/juegayaprende/juegos-adultos">Juegos</Link>
                    </div>
            </div>
        </div>
    );
}
export default NavAdult