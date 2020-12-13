import React from 'react';
import './Card.scss';

const Card = ({title, numero, faTrophy,children}) => {
    return (
        <section className={`${title === 'Ganancias' ? 'card ganancias' : 'card' } `}>
                <div className="card-container">
                    <h3 className='card-h3'>{title}</h3>
                    <h2 className='card-h2'>${numero}</h2>
                </div>
                <div className="card-container">
                    {children}
                </div>
                {/* { 
                    title === "Ganancias" ?
                    <FontAwesomeIcon icon={faTrophy} className='faTrophy' / >
                    :
                    null
                } */}
                
        </section>
    )
}

export default Card;