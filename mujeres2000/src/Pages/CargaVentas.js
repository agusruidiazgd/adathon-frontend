import React from 'react';
import './Pages.scss';
import Button from '../Componentes/Button/Button';
import TableVentas from '../Componentes/TableVentas/TableVentas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash, faDownload } from '@fortawesome/free-solid-svg-icons';

const CargaVentas = () => {
    return(
        <section className="cga-ventas-container">

            <div className="cga-producto-content1">
                <h2 className="cga-ventas-h2">Cargar Venta</h2>
                <FontAwesomeIcon icon={faTrash} className='faTrash' / >
            </div>

            <div className="cga-ventas-select">
                <p>Producto</p>
                <select className='select'>
                    <option selected></option>
                    {/* <option>{producto.id}</option>
                    <option>{producto.id}</option>
                    <option>{producto.id}</option>
                    <option>{producto.id}</option> */}
                </select>
            </div>

            <div className="cga-ventas-fecha">   
                <p>Fecha</p>
                <input type="date" id="start" name="start" min="2020-01-01" max="2020-12-31" className='cga-ventas-input-fecha'></input>
            </div>

            <div className='cga-ventas-inputs'>

            <label for="quantity" className='cga-ventas-label'>
                <p>Cantidad</p>
                    <input type="quantity" name="quantity" min="1" max="20" className='cga-ventas-input' ></input>
            </label>
                    

            <label for="name" className='cga-ventas-label'>
                <p className='p-precio'>Precio</p><p>unitario</p>
                    <input type="number" className='cga-ventas-input' name="tentacles"></input>
            </label>

            <label for="name" className='cga-ventas-label'>
                <p>Total</p>
                    <input type="number" className='cga-ventas-input' name="tentacles"></input>
            </label>

            </div>

            <div className='cga-producto-content-button'>
                <Button text='Cargar' tamaño='chico' color='naranja'/>
            </div>

            <div className="cga-producto-content-lista">
                <h2 className="lista-h2">Detalle de Ventas</h2>
                <FontAwesomeIcon icon={faPencilAlt} className='faPencil' / >
                <FontAwesomeIcon icon={faDownload} className='faPencil' / >
            </div>

            <div className="cga-producto-table">
                <TableVentas /> 
            </div>

        </section>
    )
}

export default CargaVentas;