import React from 'react';
import './Table.scss';
import moment from 'moment';

const Table = ({productos,costos, titulos}) => {

    const dateFormat = (string) =>{
        const date = moment(string);
        return date.format("YY-MM-DD")
    } 

    return(
        <table id='table' className="table-container">
            <thead>
                <tr className='table-tr'>
                    {  
                        titulos.map(item=>{
                            return(
                                <th className='table-tr'>{item}</th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    productos ? 
                        productos.map(prod=>{
                            return(
                                <tr key={prod.productoId} className='table-tr'>
                                    <td>{prod.productoId}</td>
                                    <td>{prod.nombre}</td>
                                    <td>{prod.precio}</td>
                                    <td>{prod.costoVariable}</td>
                                </tr>
                            )
                        })
                        : 
                        costos.map(costo=>{
                            return(
                                <tr key={costo.costoFijoId} className='table-tr'>
                                    <td>{costo.esHogar ? "Hogar" : "Negocio"}</td>
                                    <td>{costo.nombre}</td>
                                    <td>{dateFormat(costo.fecha)}</td>
                                    <td>{costo.monto}</td>
                                    
                                </tr>
                            )
                        })
                }
            </tbody>
        </table>

    )
}

export default Table;
