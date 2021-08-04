import React from 'react';
import PropTypes from 'prop-types';
import hamburger from '../../img/hamburger.svg';
import menuCross from '../../img/menu-cross.svg';
import {closePopupByEsc} from '../../utils';

const Header = ({logo}) => {

    const hamburgerClickHandler = () => {
        document.querySelector(`.header__menu`).classList.toggle(`header__menu--mobile-hidden`);
        document.querySelector(`.header__mobile-menu-cross`).classList.toggle(`visually-hidden`);
        document.querySelector(`.header__log-in-mobile-icon`).classList.toggle(`visually-hidden`);
    }

    const mobileMenuCrossClickHandler = () => {
        document.querySelector(`.header__menu`).classList.toggle(`header__menu--mobile-hidden`);
        document.querySelector(`.header__mobile-menu-cross`).classList.toggle(`visually-hidden`);
        document.querySelector(`.header__log-in-mobile-icon`).classList.toggle(`visually-hidden`);
    }

    const windowKeydownHandler = (evt) => closePopupByEsc;

    const loginClickHandler = () => {
        document.querySelector(`.login-popup`).classList.toggle(`visually-hidden`);
        document.querySelector(`.login-popup__input--login`).focus();
        window.addEventListener(`keydown`, windowKeydownHandler())
    }

    const loginMenuClickHandler = () => {
        document.querySelector(`.login-popup`).classList.toggle(`visually-hidden`);
        document.querySelector(`.login-popup__input--login`).focus();
        window.addEventListener(`keydown`, windowKeydownHandler())
    }

    return (
        <header className="header">
            <div className="header__center-wrapper center-wrapper">
                <img className="header__mobile-menu" src={hamburger} alt="гамбургер" onClick={hamburgerClickHandler}/>
                <div className="header__logo logo">
                    <img className="logo__image" src={logo} alt="Логотип" />
                    <div className="logo__name">
                        ЛИГА Банк
                    </div>
                </div>
                <img onClick={mobileMenuCrossClickHandler} className="header__mobile-menu-cross visually-hidden" src={menuCross} alt="закрыть" /> 
                <div className="header__menu header__menu--mobile-hidden">
                    <nav className="header__navigation">
                        <ul className="header__nav-items">
                            <li className="header__nav-item"><a href="services.html" className="header__nav-link">Услуги</a></li>
                            <li className="header__nav-item"><a href="loan.html" className="header__nav-link">Рассчитать кредит</a></li>
                            <li className="header__nav-item header__nav-item--active"><a href="#" className="header__nav-link">Конвертер валют</a></li>
                            <li className="header__nav-item"><a href="contacts.html" className="header__nav-link">Контакты</a></li>
                        </ul>
                    </nav>
                    <div onClick={loginMenuClickHandler} className="header__log-in">
                        Войти в Интернет-банк
                    </div> 
                </div>

                <div onClick={loginClickHandler} className="header__log-in-mobile-icon">
                </div> 
            </div>
        </header>
    )
}

Header.propTypes = {
    logo: PropTypes.string
}
  

export default Header;