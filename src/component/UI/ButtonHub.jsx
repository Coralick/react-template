import React from 'react';
import Button from './Button';

function ButtonHub(props) {
    return (
        <div>
            <Button btnClass={'white_btn'}>Меню</Button>
            <Button btnClass={'white_btn'}>Меню</Button>
            <Button btnClass={'white_btn'}>Меню</Button>
        </div>
    );
}

export default ButtonHub;