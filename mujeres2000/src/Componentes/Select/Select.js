import React from 'react';
import './Select.scss';

const Select = () => { 
    return(
        <div className='select-container'>
            <label for="start" className='label-text'>Seleccione un Mes:
                <input type="month" id="start" name="start" min="2020-01" value="2020-12"></input>
            </label>
        </div>

    )
}

export default Select;
