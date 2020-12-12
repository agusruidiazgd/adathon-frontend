import React from 'react';
import './Select.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
const Select = () => { 
    return(
        <div className='select-container'>

            <div className='select-content'>
                <h3 className='select-h3'>Seleccione mes y año</h3>
                <FontAwesomeIcon icon={faChevronDown} className='faChevron' / >
            </div>
            <div> 
                <label for="start">
                    <input type="month" id="start" name="start" min="2020-01" value="2020-12" className='select-input '></input>
                </label>
            </div> 

        </div>
       

    )
}

export default Select;
