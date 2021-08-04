import React from "react";

const TabDeposit = () => {

    return (
        <div className="tabs__tab tabs__tab--deposite tabs__tab--active">
            <h2 className="tabs__title">Вклады Лига Банка – это выгодная инвестиция в свое будущее</h2>
            <ul className="tabs__info-list">
                <li className="tabs__info-list-item"><span>Проценты по вкладам до 7%</span></li>
                <li className="tabs__info-list-item"><span>Разнообразные условия</span></li>
                <li className="tabs__info-list-item"><span>Возможность ежемесячной капитализации или вывод процентов на банковскую карту</span></li>
            </ul>
            <button className="tabs__learn-more">Узнать подробнее</button>
        </div>
    );
}

export default TabDeposit;