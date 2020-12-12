import React from 'react';
import InputLogin from '../Componentes/InputLogin/InputLogin';
import Button from '../Componentes/Button/Button';
import Mujeres2000 from '../Assets/mujeres2000-logo.jpg';
import './Pages.scss';

const Login = () =>{
    return(
        <section className="login">
            <img className="login-logo" src={Mujeres2000} alt="Mujeres2000"/>
            <p className='login-p'>Control de costos y ventas</p>
            <form>
                <InputLogin text="E-mail"/>
                <InputLogin text="Contraseña"/>
                <Button text="Iniciar sesión" />
            </form>
        </section>
    )
}

export default Login;
