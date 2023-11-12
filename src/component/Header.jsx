import React from 'react';

function Header({headerClass, children}) {
    return (
        <header className={headerClass}>
            {children}
        </header>
    );
}

export default Header;