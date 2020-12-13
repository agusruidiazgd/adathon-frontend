import React from 'react';
import './Pages.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CargaVentas = () => {
    return(
        <section className="cga-ventas-container">
             <div className="cga-producto-content1">
                <h2 className="cga-producto-h2">Cargar Venta</h2>
                <FontAwesomeIcon icon={faTrash} className='faTrash' / >
            </div>


        </section>
    )
}

export default CargaVentas;