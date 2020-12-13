import React from 'react';
import './TableVentas.scss';

const TableVentas = () => {
    return(
        <table id='table' className="table-container">
            <thead>
                <tr className='table-tr'>
                    
                    <th className='table-tr'>Venta</th>
                    <th className='table-tr'>Concepto</th>
                    <th className='table-tr'>Fecha</th>
                    <th className='table-tr'>Cantidad</th>
                    <th className='table-tr'>PrecioUnitario</th>
                    <th className='table-tr'>Total</th>
                </tr>
            </thead>
            <tbody>
                {/* {
                    *******.map(person=>{
                        return(
                            <tr key={} className={person.live === false ? 'tr-dead': null }>
                                <td>{person.first_name} {person.last_name}</td>
                                <td>{person.country}</td>
                                <td>{person.age}</td>
                                <td>{dateFormat(person.infect_date)}</td>
                                <td>
                                    {person.female === true ? 'Female' : 'Male'}
                                </td>
                            </tr>
                        )
                    })
                } */}
            </tbody>
        </table>

    )
}

export default TableVentas;
