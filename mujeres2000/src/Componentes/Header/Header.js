import React, { useState } from 'react';
import './Header.scss';
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBars} from '@fortawesome/free-solid-svg-icons';
import Perfil from '../../Assets/perfil.jpg';
import NavBar from '../NavBar/NavBar';

const Header = ({nameUser}) => {

    const [displayNavBar, setDisplayNavBar] = useState(false);

    const showNavBar = () => {
        setDisplayNavBar(!displayNavBar);
    }

    const location = useLocation();

    return (
        <React.Fragment>
        <header className="header-container">

            {
                nameUser && location.pathname !== '/login' ? 
                    <React.Fragment>
                        <div className='header-bars'>
                            <button type='button' className='header-button' onClick={showNavBar}>
                                <FontAwesomeIcon icon={faBars} className='faBars' / >
                            </button>
                            
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

            {
            displayNavBar ? 
            <NavBar showNavBar={showNavBar} />
            : 
            null
            }

        </header>

        </React.Fragment> 
    )
}

export default Header;

