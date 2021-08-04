import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCreditType} from '../../store/credit-calc/selectors';
import {CREDIT_TYPE} from '../../const';

const Checkboxes = ({creditType, motherCapitalChangeHandler, carCreditCheckboxesHandler}) => {
    if (creditType === CREDIT_TYPE.MORTGAGE) {
        return (
            <div className="credit-calc__mother-capital">
                <input onChange={motherCapitalChangeHandler()} id="mother-capital" type="checkbox" className="credit-calc__mother-capital-checkbox" />
                <label htmlFor="mother-capital" className="credit-calc__mother-capital-input-label">Использовать материнский капитал</label>
            </div>
        )
    }

    return (
        <div className="credit-calc__mother-capital">
            <input onChange={carCreditCheckboxesHandler} id="kasko" type="checkbox" className="credit-calc__mother-capital-checkbox" />
            <label htmlFor="kasko" className="credit-calc__mother-capital-input-label">Оформить КАСКО в нашем банке</label>

            <input onChange={carCreditCheckboxesHandler} id="life-insurance" type="checkbox" className="credit-calc__mother-capital-checkbox" />
            <label htmlFor="life-insurance" className="credit-calc__mother-capital-input-label">Оформить Страхование жизни в нашем банке</label>
        </div>
    )
}

Checkboxes.propTypes = {
    creditType: PropTypes.string,
    motherCapitalChangeHandler: PropTypes.func.isRequired,
    carCreditCheckboxesHandler: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        creditType: getCreditType(state)
    };
};

export default connect(mapStateToProps, null)(Checkboxes);