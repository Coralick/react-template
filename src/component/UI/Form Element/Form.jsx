import React, { useState } from 'react';
import InputText from './InputText';
import Checkbox from './Checkbox';
import Button from '../Button';
import axios from 'axios';

function Form(props) {
    const [formValue, setFormValue] = useState({})
    const sendForm = e =>{
        e.preventDefault()
        axios.post('http://localhost:8080/auth/sign-up', {
            name: "alexandor",
            phone: '88005553535',
            email: 'asdkasdoasjdjas@mail.org'
        }, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
        }
    })
        .then(function(res) {
            window.location.reload() 
            alert('Успешно')
        })
        .catch(function(err){
            window.location.reload()
            alert('Не успешно')
        })
    }
    return (
        <form className='form_red'>
            <InputText placeholder={'Трахов Игорь Владимирович'} className='input_container'>ФИО</InputText>
            <InputText placeholder={'8-996-557-34-56'} className='input_container'>Номер телефона</InputText>
            <InputText placeholder={'trahov@yandex.ru'} className='input_container'>E-mail</InputText>
            <Checkbox>Пользовательское соглашение</Checkbox>
            <div className="button_form_bottom" onClick={sendForm} >
                <Button btnClass={'inline'}  >ЗАРЕГИСТРИРОВАТЬСЯ</Button>
            </div>
        </form>
    );
}

export default Form;