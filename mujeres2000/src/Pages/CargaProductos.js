import React from 'react';
import './Pages.scss';
import Table from '../Componentes/Table/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '../Componentes/Button/Button';


const CargaProducto = ({producto, concepto, costo, precio}) => {

    return(
       
        <section className="cga-producto-container">
            <div className="cga-producto-content1">
                <FontAwesomeIcon icon={faChevronDown} className='faChevron' / >
                <h2 className="cga-producto-h2">Cargar Producto</h2>
            </div>

            <div className='cga-producto-content2'>
                <label for="Name" className='cga-producto-label'>Concepto
                    <input type="text" id="content2-input" className='content2-input'></input>
                </label>
            </div>

            <div className='cga-producto-content3'>
                <label for="Name" className='cga-producto-label'>Precio
                    <input type="number" id="content3-input" className='content3-input' placeholder="$"></input>
                </label>
                <label for="Name" className='cga-producto-label'>Costo
                    <input type="number" id="content3-input" placeholder="$" className='content3-input'></input>
                </label>
            </div>

            <div className='cga-producto-content-button'>
                <Button text='Cargar ventas' tamaño='chico' color='naranja'/>
            </div>

            <div className="cga-producto-content-lista">
                <h2 className="lista-h2">Lista de Productos</h2>
                <FontAwesomeIcon icon={faPencilAlt} className='faPencil' / >
                <FontAwesomeIcon icon={faTrash} className='faPencil' / >
            </div>

            <div className="cga-producto-table">
                <Table /> 
            </div>

        </section>
    )
}

export default CargaProducto;
