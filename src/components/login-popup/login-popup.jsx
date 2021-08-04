import React from 'react';
import logo from '../../img/logo.svg';
import popupCross from '../../img/popup-cross.svg';
import {closePopupByEsc} from '../../utils';

const LoginPopup = () => {

    const closePopupHandler = () => {
        document.querySelector(`.login-popup`).classList.add(`visually-hidden`);
        window.removeEventListener(`keydown`, closePopupByEsc)
    }

    const changePasswordButonClickHandler = () => {
        const passwordInput = document.querySelector(`.login-popup__input--password`)
        if (passwordInput.type === `password`) {
            passwordInput.type = `text`;
        } else {
            passwordInput.type = `password`;
        }
    }

    return (
        <div className="login-popup visually-hidden">
            <div className="login-popup__login-form">
                <div className="login-popup__title-block">
                    <div className="login-popup__logo logo">
                        <img loading="lazy" className="logo__image logo__image--popup" src={logo} alt="Логотип" />
                        <div className="logo__name logo__name--popup">
                            <span className="logo__popup-bold">ЛИГА Банк</span> 
                            <span className="logo__popup-small">интернет-банк</span> 
                        </div>
                    </div>
                    <img loading="lazy" onClick={closePopupHandler} className="login-popup__cross" src={popupCross} alt="закрыть" /> 
                </div>
                
                <form action="" className="login-popup__form">
                    <label htmlFor="login" className="login-popup__label">Логин</label>
                    <input onInput={(evt) => {
                        localStorage.setItem('login', evt.target.value)
                    }} type="text" id="login" className="login-popup__input login-popup__input--login" />

                    <label htmlFor="password" className="login-popup__label">Пароль</label>
                    <div className="login-popup__input-wrapper">
                        <input onInput={(evt) => {
                            localStorage.setItem('password', evt.target.value)
                        }} type="password" id="password" className="login-popup__input login-popup__input--password" />
                        <button type="button" onClick={changePasswordButonClickHandler} className="login-popup__password-change"></button>
                    </div>

                    <a href="reset.html" className="login-popup__forget-password">Забыли пароль?</a>

                    <button className="login-popup__submit">Войти</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPopup;