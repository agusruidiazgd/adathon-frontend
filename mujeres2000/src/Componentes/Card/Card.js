import React from 'react';
import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy} from '@fortawesome/free-solid-svg-icons';

const Card = ({title, numero, faTrophy}) => {
    return (
        <section className="card">
           
            <div className='card-container'>
                <h3 className='card-h3'>{title}</h3>
                <h2 className='card-h2'>{numero}</h2>
                {/* { 
                    user ? */}
                <FontAwesomeIcon icon={faTrophy} className='faTrophy' / >
                    {/* :
                    null
                } */}
            </div>
            
        </section>
    )
}

export default Card;