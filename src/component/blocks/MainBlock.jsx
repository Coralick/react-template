import React from 'react';
import BgMainImage from '../../Image/Component 1.png'
import Button from '../UI/Button';
function MainBlock(props) {
    return (
        <section className='main_block' backgroundImage={BgMainImage}>
            <h1 className='main_title'>ДЕГУСТАЦИЯ ВИНА</h1>
            <Button btnClass={"red_fill"}>ЗАРЕГИСТРИРОВАТЬСЯ</Button>
        </section>
    );
}

export default MainBlock;