import React from 'react';

function InputText({placeholder, children}) {
    return (
        <label className='label_form'>{children}
            <input placeholder={placeholder} type='text' className='input_text'/>
        </label>
    );
}

export default InputText;