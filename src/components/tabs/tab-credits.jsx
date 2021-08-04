import React from "react";

const TabCredits = () => {

    return (
        <div className="tabs__tab tabs__tab--credits">
            <h2 className="tabs__title">Лига Банк выдает кредиты под любые цели</h2>
            <ul className="tabs__info-list">
                <li className="tabs__info-list-item"><span>Ипотечный кредит</span></li>
                <li className="tabs__info-list-item"><span>Автокредит</span></li>
                <li className="tabs__info-list-item"><span>Потребительский</span></li>
            </ul>
            <p className="tabs__info">
                Рассчитайте ежемесячный платеж<br/>и ставку по кредиту воспользовавшись<br/>
                нашим <a href="#credit-calc" className="tabs__learn-more-link">кредитным калькулятором</a>
            </p>
        </div>
    );
}

export default TabCredits;