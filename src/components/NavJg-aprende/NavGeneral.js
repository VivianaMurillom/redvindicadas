import book from "../../pages/juegayaprende/img/book.svg"
import play from "../../pages/juegayaprende/img/juego.svg"
import downloads from "../../pages/juegayaprende/img/icon-descarga.svg"
import dados from "../../pages/juegayaprende/img/dados.svg"
import compu from "../../pages/juegayaprende/img/computador.svg"
import {Link} from "react-router-dom"
import "./NavGeneral.css"
import "../../index.css"
function NavGeneral(){
    return(
        <div>
            <div className="container-title">
                <h1 className="h1">Adultos y Padres</h1>
            </div>
            <article className="contenedor-fondo fondo-adultos">

                <div className="card-container">
                    <div className="card-border">
                        <div className="card ">
                            <img className="img-card" src={book} alt="" />
                            <h2 className="h2">Recursos</h2>
                            <Link to="/juegayaprende/recursos-adultos"><img className="icondescarga" src={downloads} alt=""/></Link>
                        </div>
                    </div>

                    <div className="card-border">
                        <div className="card">
                            <img className="img-card" src={play} alt="" />
                            <h2 className="h2">Juegos</h2>
                            <Link to="/juegayaprende/juegos-adultos"><img className="icondescarga" src={downloads} alt=""/></Link>
                        </div>
                    </div>
                </div>
            </article>
            <div className="container-title">
                <h1 className="h1">Juventudes</h1>
            </div>
            <article className="contenedor-fondo fondo-jovenes">
                <div className="card-container">
                    <div className="card-border">
                        <div className="card">
                            <img className="img-card" src={compu} alt=""/>
                                <h2 className="h2">Recursos</h2>
                                <a href="recursos-adultos.html"><img className="icondescarga" src={downloads} alt=""/></a>
                        </div>
                    </div>
                    <div className="card-border">
                        <div className="card">
                            <img className="img-card" src={dados} alt=""/>
                                <h2 className="h2">Juegos</h2>
                                <a href="juegos-adultos.html"><img className="icondescarga" src={downloads} alt=""/></a>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
export default NavGeneral