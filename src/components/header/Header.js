import React from 'react';

import './header.scss'
import logo from '../../utilities/assets/Logo_Symbol_White_PNG.png'

function Header(props) {
    return (
        <section>
            <div className='header-body'>
                <img className='logo' src={logo} />
                Header
            </div>

        </section>
    );
}

export default Header;