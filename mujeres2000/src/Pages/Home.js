import React from 'react';
import Select from '../Componentes/Select/Select';
import Card from '../Componentes/Card/Card';
import Button from '../Componentes/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy} from '@fortawesome/free-solid-svg-icons';

const Home = () => {

    const pruebaBalance =
        {
            "ganancias": 4000.0,
            "costosTotales": 1000.0,
            "totalVentas": 5000.0,
            "fecha": null
        }
    
    return(
        <section className="home">
            <Select />
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
                <Card title="Ganancias" numero={pruebaBalance.ganancias}>
                    <FontAwesomeIcon icon={faTrophy} className='faTrophy' / >
                </Card>
                <Card title="Costos" numero={pruebaBalance.costosTotales}>
                    <Button text='Cargar costos' tamaño='chico' color='naranja'/>
                </Card>
                <Card title="Ventas" numero={pruebaBalance.totalVentas} >
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