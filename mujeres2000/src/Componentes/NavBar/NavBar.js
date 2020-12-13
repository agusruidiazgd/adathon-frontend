import React from 'react';
import './NavBar.scss';
import {Link} from 'react-router-dom';

const NavBar = ({showNavBar}) => { 
    return (
        <React.Fragment>
        <div className="overlay"></div>

        <div className='navbar-container'>
            <Link to = '/carga-producto'>
                <a href="#" className='navbar-links' onClick={showNavBar}>Cargar Producto</a>
            </Link>
            <Link to = '/carga-gastos'>
                <a href="#" className='navbar-links' onClick={showNavBar}>Cargar Costos</a>
            </Link>
            <a href="#" className='navbar-links'>Cargar Ventas</a>
            <div className="navbar-linea"></div>
            <a href="#" className='navbar-links reporte'>Ver Reporte</a>
            <div className="navbar-linea2"></div>
            <a href="#" className='navbar-links ayuda'>Ayuda</a>

            <Link to = '/login'>
                <a href="#" className='navbar-links cerrar-sesion' onClick={showNavBar}>Cerrar Sesión</a>
            </Link>

        </div>
        </React.Fragment>

    )
}

export default NavBar;