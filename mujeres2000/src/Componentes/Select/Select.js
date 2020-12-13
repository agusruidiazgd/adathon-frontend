import React from 'react';
import './Select.scss';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {getBalance} from '../../Services/services';

const Select = ({dateBalance, setDateBalance,setBalance}) => { 
    
    const dateFormat = (dateBalance) =>{
        const date = moment(dateBalance);
        return date.format("YYYY-MM")
    } 

    const valueDate = dateFormat(dateBalance);

    const inputChange = e =>{
        setDateBalance(`${e.target.value}`);
        getBalance('balance',{ "fecha": `${e.target.value}-01`})
        .then((data) => setBalance(data));
        console.log("se cambio el coso",dateBalance)
    }

    return(
        <div className='select-container'>

            <div className='select-content'>
                <h3 className='select-h3'>Seleccione mes y año</h3>
                <FontAwesomeIcon icon={faChevronDown} className='faChevron' / >
            </div>
            <div> 
                <label for="start">
                    <input 
                        type="month" 
                        id="dateBalance" 
                        name="start" 
                        min="2020-01" 
                        defaultValue={valueDate}
                        //value={dateBalance}
                        onChange={inputChange}
                        className='select-input '
                    ></input>
                </label>
            </div> 

        </div>
       

    )
}

export default Select;
