import React from 'react';
import './Table.scss';

const Table = () => {
    return(
        <table id='table' className="table-container">
            <thead>
                <tr className='table-tr'>
                    <th className='table-tr'>Producto</th>
                    <th className='table-tr'>Concepto</th>
                    <th className='table-tr'>Precio</th>
                    <th className='table-tr'>Costo</th>
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

export default Table;
