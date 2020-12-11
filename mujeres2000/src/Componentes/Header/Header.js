import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBars} from '@fortawesome/free-solid-svg-icons';
import Perfil from '../../Assets/perfil.jpg';

const Header = ({user, name}) => {
    return (
        <header>

            {/* {
                user ?  */}
                <div className="header-container">
                    <div className='header-bars'>
                        <FontAwesomeIcon icon={faBars} className='faBars' / >
                    </div>

                    <div className="header-content">
                        <img src={Perfil} className="header-img" alt='imagen'></img>
                        <h1 className='header-h1'>{name}</h1> 
                        <FontAwesomeIcon icon={faBell} className='faBell' / >  
                    </div>
                </div>
                {/* : 
                null
            } */}
        </header>
    )
}

export default Header;

