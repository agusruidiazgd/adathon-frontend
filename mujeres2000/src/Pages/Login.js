import React from 'react';
import InputLogin from '../Componentes/InputLogin/InputLogin';

const Login = () =>{
    return(
        <section className="login">
            <img src="" alt="Mujeres2000"/>
            <p>Control de costos y ventas</p>
            <form>
                <InputLogin text={"E-mail"}/>
                <InputLogin text={"Contraseña"}/>
            </form>
        </section>
    )
}

export default Login;
