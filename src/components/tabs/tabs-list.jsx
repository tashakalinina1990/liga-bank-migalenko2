import React from "react";
import deposites from "../../img/deposites.svg"
import credits from "../../img/credits.svg"
import security from "../../img/security.svg"
import phoneIcon from "../../img/phone-icon.svg"

const TabsList = () => {

    const hideActiveTab = () => {
        document.querySelector(`.tabs__tab--active`).classList.remove(`tabs__tab--active`);
    }

    const tabClickHandler = (tabClass) => () => {
        hideActiveTab();
        document.querySelector(`.tabs`).slickGoTo(2)

    }

    return (
        <ul className="tabs__list">
            <li onClick={tabClickHandler(`tabs__tab--deposites`)} className="tabs__list-item">
                <img src={deposites} width="34" height="33" alt="депозит" className="tabs__list-item-img" />
                <span className="tabs__list-item-name">Вклады</span>
            </li>
            <li onClick={tabClickHandler(`tabs__tab--credits`)} className="tabs__list-item">
                <img src={credits} width="34" height="30" alt="кредиты" className="tabs__list-item-img" />
                <span className="tabs__list-item-name">Кредиты</span>
            </li>
            <li onClick={tabClickHandler(`tabs__tab--insurance`)} className="tabs__list-item">
                <img src={security} width="28" height="34" alt="безопасность" className="tabs__list-item-img" />
                <span className="tabs__list-item-name">Страхование</span>
            </li>
            <li onClick={tabClickHandler(`tabs__tab--online-services`)} className="tabs__list-item">
                <img src={phoneIcon} width="20" height="34" alt="онлайн-сервисы" className="tabs__list-item-img" />
                <span className="tabs__list-item-name">Онлайн-сервисы</span>
            </li>
        </ul>
    );
}

export default TabsList;