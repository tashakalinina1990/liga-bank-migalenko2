import React, { Component } from 'react';
import Slider from 'react-slick';
import TabOnlineServices from './tab-online-services';
import TabCredits from './tab-credits';
import TabDeposit from './tab-deposite';
import TabInsurances from './tab-insurance';
import deposites from "../../img/deposites.svg"
import credits from "../../img/credits.svg"
import security from "../../img/security.svg"
import phoneIcon from "../../img/phone-icon.svg"

export default class MainSlider extends Component {
    render() {
        const isDesktop = document.documentElement.clientWidth < 1024 ? true : false
        const settings = {
            swipe: true,
            dots: isDesktop,
            infinite: true,
            speed: 500,
            slidesToShow: 1,    
            slidesToScroll: 1,
            className: `tabs-slider`
        };
        return (
            <section className="tabs">
                <div className="tabs__center-wrapper center-wrapper">
                <ul className="tabs__list">
                    <li 
                        onClick={(evt) => {
                            this.slider.slickGoTo(0);
                            document.querySelector(`.tabs__list-item--active`).classList.remove(`tabs__list-item--active`);
                            evt.target.closest(`li`).classList.add(`tabs__list-item--active`);
                        }}
                        className="tabs__list-item tabs__list-item--active"
                    >
                        <img src={deposites} width="34" alt="депозит" className="tabs__list-item-img" />
                        <span className="tabs__list-item-name">Вклады</span>
                    </li>

                    <li 
                        onClick={(evt) => {
                            this.slider.slickGoTo(1);
                            document.querySelector(`.tabs__list-item--active`).classList.remove(`tabs__list-item--active`);
                            console.log(evt.target.closest(`li`))
                            evt.target.closest(`li`).classList.add(`tabs__list-item--active`);
                        }}
                        className="tabs__list-item"
                    >
                        <img src={credits} width="34" alt="кредиты" className="tabs__list-item-img" />
                        <span className="tabs__list-item-name">Кредиты</span>
                    </li>

                    <li
                        onClick={(evt) => {
                            this.slider.slickGoTo(2);
                            document.querySelector(`.tabs__list-item--active`).classList.remove(`tabs__list-item--active`);
                            evt.target.closest(`li`).classList.add(`tabs__list-item--active`);
                        }}
                        className="tabs__list-item"
                    >
                        <img src={security} width="28" alt="безопасность" className="tabs__list-item-img" />
                        <span className="tabs__list-item-name">Страхование</span>
                    </li>

                    <li
                        onClick={(evt) => {
                            this.slider.slickGoTo(3);
                            document.querySelector(`.tabs__list-item--active`).classList.remove(`tabs__list-item--active`);
                            evt.target.closest(`li`).classList.add(`tabs__list-item--active`);
                        }}
                        className="tabs__list-item"
                    >
                        <img src={phoneIcon} width="20" alt="онлайн-сервисы" className="tabs__list-item-img" />
                        <span className="tabs__list-item-name">Онлайн-сервисы</span>
                    </li>
                </ul>
                    <Slider ref={slider => (this.slider = slider)} {...settings}>
                        <TabDeposit />
                        <TabCredits />
                        <TabInsurances />
                        <TabOnlineServices />
                    </Slider>
                </div>
            </section>
        )
    }
}