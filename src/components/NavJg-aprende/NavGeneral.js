import downloads from "../../pages/juegayaprende/img/icon-descarga.svg"
import dados from "../../components/main-menu-jovenes/feminismo(1).png"
import compu from "../../components/main-menu-jovenes/feminismo.png"
import libro from "../../pages/juegayaprende/img/libro1.png"
import rompecabeza from "../../pages/juegayaprende/img/image62.png"
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
                        <div className="card">
                            <img className="img-card" src={libro} alt="" />
                            <h2 className="h2">Recursos</h2>
                            <Link to="/redvindicadas/juegayaprende/recursos-adultos"><img className="icondescarga" src={downloads} alt=""/></Link>
                        </div>
                    </div>

                    <div className="card-border">
                        <div className="card">
                            <img className="img-card" src={rompecabeza} alt="" />
                            <h2 className="h2">Juegos</h2>
                            <Link to="/redvindicadas/juegayaprende/juegos-adultos"><img className="icondescarga" src={downloads} alt=""/></Link>
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
                                <a href="/redvindicadas/juegayaprende/recursos-jovenes1"><img className="icondescarga" src={downloads} alt=""/></a>
                        </div>
                    </div>
                    <div className="card-border">
                        <div className="card">
                            <img className="img-card" src={dados} alt=""/>
                                <h2 className="h2">Juegos</h2>
                                <a href="/redvindicadas/juegayaprende/juegos-jovenes"><img className="icondescarga" src={downloads} alt=""/></a>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
export default NavGeneral