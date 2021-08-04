import React from "react";

const TabOnlineServices = () => {

    return (
        <div className="tabs__tab tabs__tab--online-services">
            <h2 className="tabs__title">Лига Банк — это огромное количество онлайн-сервисов для вашего удобства</h2>
            <ul className="tabs__info-list">
                <li className="tabs__info-list-item"><span>Мобильный банк,<br/>который всегда под рукой</span></li>
                <li className="tabs__info-list-item"><span>Приложение Лига-проездной позволит вам оплачивать билеты по всему миру</span></li>
            </ul>
            <button className="tabs__learn-more">Узнать подробнее</button>
        </div>
    );
}

export default TabOnlineServices;