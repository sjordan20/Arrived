import React from 'react';

import './header.scss'
import logo from '../../utilities/assets/Logo_Symbol_White_PNG.png'

function Header(props) {
    return (
        <div className='header'>
            <div className='header-body'>
                <div className='logo-container'>

                    <img className='logo' src={logo} />
                    <h1 className='arrived-header-container'>
                        <p className='arrived'>
                            ARRIVED
                    </p>
                    </h1>
                </div>
            </div>

        </div>
    );
}

export default Header;