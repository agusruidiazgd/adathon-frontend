import React, {useState, useEffect} from 'react';
import Select from '../Componentes/Select/Select';
import Card from '../Componentes/Card/Card';
import Button from '../Componentes/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy} from '@fortawesome/free-solid-svg-icons';
import {getBalance} from '../Services/services';

const Home = () => {

    const [balance, setBalance] = useState([]);
    const [dateBalance, setDateBalance] = useState("2020-12-01");

    useEffect(() => {
        const promise = getBalance('balance',{ "fecha": dateBalance});
        promise.then(data => { 
            setBalance(data);
            console.log(balance);
        });
    }, []);

    console.log(balance);
    return(
        <section className="home">
            <Select setDateBalance={setDateBalance} setBalance={setBalance}/>
            <h2 className="home-tittle">Cargá tus productos:</h2>

            <section className={`card producto`}>
                <h3 className='card-h3'>Productos</h3>
                <div className="card-container-producto">
                    <Button text='Ver productos' tamaño='chico' color='naranja'/>
                    <Button text='Cargar producto' tamaño='chico' color='violeta'/>
                </div>
            </section>

            <h2 className="home-tittle">Calculá tus costos y ventas:</h2>

            <section className={`card grande`}>
                <Card title="Ganancias" numero={balance.ganancias}>
                    <FontAwesomeIcon icon={faTrophy} className='faTrophy' / >
                </Card>
                <Card title="Costos" numero={balance.costosTotales}>
                    <Button text='Cargar costos' tamaño='chico' color='naranja'/>
                </Card>
                <Card title="Ventas" numero={balance.totalVentas} >
                    <Button text='Cargar ventas' tamaño='chico' color='violeta'/>
                </Card>
            </section>

            <h2 className="home-tittle">Tambien podes consultar:</h2>

            <section className={`card producto`}>
                <h3 className='card-h3-balance'>¡Consulta tus balances!</h3>
                <div className="card-container-producto">
                    <Button text='Ver reporte' tamaño='chico' color='violeta'/>
                </div>
            </section>

        </section>
    )
}

export default Home;