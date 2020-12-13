import React from 'react';
import InputLogin from '../Componentes/InputLogin/InputLogin';
import Button from '../Componentes/Button/Button';
import Mujeres2000 from '../Assets/mujeres2000-logo.jpg';
import './Pages.scss';
import {Link} from 'react-router-dom';

const Login = ({setNameUser, setPassword}) =>{

    return(
        <section className="login">
            <img className="login-logo" src={Mujeres2000} alt="Mujeres2000"/>
            <p className='login-p'>Control de costos y ventas</p>
            <form>
                <InputLogin type={'email'} text="Usuario" setter={setNameUser}/>
                <InputLogin type={'password'} text="Contraseña" setter={setPassword}/>
                <Link to = '/home'>
                    <Button text="Iniciar sesión" tamaño="grande" color="violeta" />
                </Link>
            <a href="#" className="login-registro">Registrarme</a>
                
            </form>
        </section>
    )
}

export default Login;
