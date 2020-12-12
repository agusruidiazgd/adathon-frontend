import React from 'react';
import './Header.scss';
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBars} from '@fortawesome/free-solid-svg-icons';
import Perfil from '../../Assets/perfil.jpg';

const Header = ({nameUser}) => {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <header className="header-container">

            {
                nameUser && location.pathname !== '/login' ? 
                    <React.Fragment>
                        <div className='header-bars'>
                            <FontAwesomeIcon icon={faBars} className='faBars' / >
                        </div>

                        <div className="header-content">
                            <img src={Perfil} className="header-img" alt='imagen'></img>
                            <h1 className='header-h1'>{nameUser}</h1> 
                            <FontAwesomeIcon icon={faBell} className='faBell' / >  
                        </div>
                    </React.Fragment>
                : 
                null
            }
        </header>
    )
}

export default Header;

