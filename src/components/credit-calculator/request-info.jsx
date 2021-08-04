import React from 'react';
import {connect} from 'react-redux';
import {setOfferIsActiveAction} from '../../store/actions';
import {getCreditSum, getCreditPercent, getCreditDuration, getMinCredit} from '../../store/params/selectors';
import {getCreditType} from '../../store/credit-calc/selectors';
import {CREDIT_TYPE} from '../../const';
import {paymentFunc} from '../../utils';
import PropTypes from 'prop-types';

const RequestInfo = ({creditSum, creditPercent, creditDuration, onMakeRequestClick, creditType, minCredit}) => {
    if (creditSum <= --minCredit) {
        return (
            <>
                <h2 className="calc-credit__decline-block-title">Наш банк не выдаёт ипотечные кредиты меньше {creditType === CREDIT_TYPE.MORTGAGE ? `500 000` : `200 000`} рублей.</h2>
                <p className="calc-credit__decline-block-description">Попробуйте использовать другие параметры для расчёта.</p>
            </>
        )
    }
    const MIN_SALARY = paymentFunc (Number(creditSum), creditDuration, creditPercent);

    const makeRequestClickHandler = () => {
        onMakeRequestClick();
    }

    return (
        <>
            <h2 className="credit-calc__title credit-calc__title--our-request">Наше предложение</h2>
            <div className="credit-calc__offer-info">
                <div className="credit-calc__offer-info-item">
                    <div className="credit-calc__offer-amount-block">
                        <span className="credit-calc__offer-amount">{creditSum.toFixed(0)}</span>
                        <span className="credit-calc__offer-type"> рублей</span>
                    </div>
                    <div className="credit-calc__offer-info-item-description">Сумма {creditType === CREDIT_TYPE.MORTGAGE ? `ипотеки` : `автокредита`}</div>
                </div>
                <div className="credit-calc__offer-info-item">
                    <div className="credit-calc__offer-amount-block">
                        <span className="credit-calc__offer-amount">{(creditPercent * 100).toFixed(1)}</span>
                        <span className="credit-calc__offer-type"> %</span>
                    </div>
                    <div className="credit-calc__offer-info-item-description">Процентная ставка</div>
                </div>
                <div className="credit-calc__offer-info-item">
                    <div className="credit-calc__offer-amount-block">
                        <span className="credit-calc__offer-amount">{MIN_SALARY.toFixed(0)}</span>
                        <span className="credit-calc__offer-type"> рублей</span>
                    </div>
                    <div className="credit-calc__offer-info-item-description">Ежемесячный платеж</div>
                </div>
                <div className="credit-calc__offer-info-item">
                    <div className="credit-calc__offer-amount-block">
                        <span className="credit-calc__offer-amount">{(MIN_SALARY / 0.45).toFixed(0)}</span>
                        <span className="credit-calc__offer-type"> рублей</span>
                    </div>
                    <div className="credit-calc__offer-info-item-description">Необходимый доход</div>
                </div>
            </div>

            <button onClick={makeRequestClickHandler} type="button" className="credit-calc__open-request-block-button">Оформить заявку</button>
        </>
    )
}

RequestInfo.propTypes = {
    creditSum: PropTypes.number ,
    creditPercent: PropTypes.number ,
    creditDuration: PropTypes.number ,
    onMakeRequestClick: PropTypes.func ,
    creditType: PropTypes.string ,
    minCredit: PropTypes.number ,
}

const mapStateToProps = (state) => {
    return {
        creditSum: getCreditSum(state),
        creditPercent: getCreditPercent(state),
        creditDuration: getCreditDuration(state),
        creditType: getCreditType(state),
        minCredit: getMinCredit(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    onMakeRequestClick() {
        dispatch(setOfferIsActiveAction());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestInfo);