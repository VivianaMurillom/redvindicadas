import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <nav>
            <input type="checkbox" name="check-menu" id="check-menu" />
            <label for="check-menu" className="button-menu">
                <i className="fa-solid fa-bars fa-2xl"></i>
            </label>

            <ul className="nav-header"> 
                <li><Link to='/redvindicadas/inicio' className='item'>Inicio</Link></li>
                <li><Link to='/redvindicadas/juegayaprende' className='item'>Juega y Aprende</Link></li>
                <li><Link to='/redvindicadas/oportunidades' className='item'>Oportunidades</Link></li>
                <li className="redes">Redes de apoyo
                    <ul className="redes-enlaces">
                        <li><Link to='/redvindicadas/asociados' className='item'>Asociados</Link></li>
                        <li><Link to='/redvindicadas/lineas' className='item'>Líneas de emergencia</Link></li>
                    </ul>
                </li>
                <li><Link to='/redvindicadas/kitfem' className='item'>Kit Fem</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;