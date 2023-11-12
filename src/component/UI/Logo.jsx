import React from 'react';
import LogoImg from '../../Image/LOGO.svg'
function Logo(props) {
    return (
        <a className='logo_a' href='/'>
            <img src={LogoImg} alt="logo" className='logo_img' />
        </a>
    );
}

export default Logo;