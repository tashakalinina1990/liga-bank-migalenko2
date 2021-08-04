import React from 'react';
import PropTypes from 'prop-types';

const Credit = () => {

    return (
        <div className="slider__background-wrapper">
            <div className="slider__center-wrapper center-wrapper">
                <div className="slider__credit">
                <div className="slider__title">
                    <h2 className="slider__bank-name">Лига Банк</h2>
                    <div className="slider__description">Кредиты на любой случай</div>
                </div>
                    <a href="#credit-calc" className="slider__button">Рассчитать кредит</a>
                </div>
                <div className="slider__credit-cards">
                    <div className="slider__card slider__card--black" />
                    <div className="slider__card slider__card--white" />
                </div>
            </div>
        </div>
        
    )
}

Credit.propTypes = {
    blackCard: PropTypes.string,
    whiteCard: PropTypes.string
}

export default Credit;