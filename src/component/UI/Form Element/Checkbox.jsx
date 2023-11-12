import React from 'react';

function Checkbox({children}) {
    return (
        <label>
            <input type="checkbox" className='form_checkbox'/>
            {children}
        </label>
    );
}

export default Checkbox;