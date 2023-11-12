import React from 'react';

function MenuLink({children}) {
    return (
        <a href='#registration' className='menu_link'>
            {children}
        </a>
    );
}

export default MenuLink;