import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({logo}) => {
    return (
        <footer className="footer">
            <div className="footer__center-wrapper center-wrapper">
                <div className="footer__about-company">
                    <div className="footer__logo logo">
                            <img className="logo__image" src={logo} alt="Логотип" />
                            <div className="logo__name">
                                ЛИГА Банк
                            </div>
                    </div>
                    <p className="footer__company-copyright">
                        150015, г. Москва, ул. Московская, д. 32<br />
                        Генеральная лицензия Банка России №1050<br />
                        Ⓒ Лига Банк, 2019
                    </p>
                </div>
                <div className="footer__nav">
                    <ul className="footer__nav-items">
                        <li className="footer__nav-item"><a href="services.html" className="footer__link">Услуги</a></li>
                        <li className="footer__nav-item"><a href="loan.html" className="footer__link">Рассчитать кредит</a></li>
                        <li className="footer__nav-item"><a href="contacts.html" className="footer__link">Контакты</a></li>
                        <li className="footer__nav-item"><a href="questions.html" className="footer__link">Задать вопрос</a></li>
                    </ul>
                </div>
                <div className="footer__phone footer__phone--special">
                    <div className="footer__phone-wrapper">
                        <a href="tel:*0904" className="footer__phone-number">*0904</a>
                        <span className="footer__phone-description">Бесплатно для абонентов<br />МТС, Билайн, Мегафон, Теле2</span>
                    </div>
                </div>
                <div className="footer__phone footer__phone--general">
                    <div className="footer__phone-wrapper">
                        <a href="tel:88001112233" className="footer__phone-number">8 800 111 22 33</a>
                        <span className="footer__phone-description">Бесплатный для всех<br />городов России</span>
                    </div>
                </div>
                <div className="footer__media-links">
                    <a href="http://vk.com" className="footer__media-links-item footer__media-links-item--facebook">facebook</a>
                    <a href="http://vk.com" className="footer__media-links-item footer__media-links-item--instagram">instagram</a>
                    <a href="http://vk.com" className="footer__media-links-item footer__media-links-item--twitter">twitter</a>
                    <a href="http://vk.com" className="footer__media-links-item footer__media-links-item--youtube">youtube</a>
                    
                </div>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    logo: PropTypes.string
}

export default Footer;