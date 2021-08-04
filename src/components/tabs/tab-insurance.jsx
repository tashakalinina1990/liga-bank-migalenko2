import React from "react";

const TabInsurances = () => {

    return (
        <div className="tabs__tab tabs__tab--insurance">
            <h2 className="tabs__title">Лига Страхование — застрахуем все что захотите</h2>
            <ul className="tabs__info-list">
                <li className="tabs__info-list-item"><span>Автомобильное страхование</span></li>
                <li className="tabs__info-list-item"><span>Страхование жизни и здоровья</span></li>
                <li className="tabs__info-list-item"><span>Страхование недвижимости</span></li>
            </ul>
            <button className="tabs__learn-more"> Узнать подробнее</button>
        </div>
    );
}

export default TabInsurances;