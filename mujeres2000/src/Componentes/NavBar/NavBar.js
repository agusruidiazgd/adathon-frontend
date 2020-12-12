import React from 'react';
import './NavBar.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrophy} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => { 
    return (
        <React.Fragment>
        <div className="overlay"></div>
        
        <div className='navbar-container'>
            <a href="#" className='navbar-links'>Cargar Producto</a>
            <a href="#" className='navbar-links'>Cargar Costos</a>
            <a href="#" className='navbar-links'>Cargar Ventas</a>
            <div className="navbar-linea"></div>
            <a href="#" className='navbar-links reporte'>Ver Reporte</a>
            <div className="navbar-linea2"></div>
            <a href="#" className='navbar-links ayuda'>Ayuda</a>
            <a href="#" className='navbar-links cerrar-sesion'>Cerrar Sesión</a>

        </div>
        </React.Fragment>

    )
}

export default NavBar;