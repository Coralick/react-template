import React from 'react';

function Button({btnClass, children}) {
    console.log(btnClass)
    return (
        <button className={'btn ' + btnClass}>{children}</button>
    );
}

export default Button;