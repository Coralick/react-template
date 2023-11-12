import React from 'react';
import RegImage from '../../Image/-7 2.png'
import Form from '../UI/Form Element/Form';
function RegisterBlock(props) {
    return (
        <div className='register_block'>
            <div className='heart_reg_container'>
                <p className='title_reg'>РЕГИСТРАЦИЯ</p>
                <img src={RegImage} alt="heart" className='heart_reg'/> 
            </div>
            <Form/>
        </div>
    );
}

export default RegisterBlock;