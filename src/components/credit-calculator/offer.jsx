import React from 'react';
import {connect} from 'react-redux';
import {getIsActive, getOfferNumber} from '../../store/offer/selectors'
import {getCreditSum, getCreditDuration, getFirstPayment} from '../../store/params/selectors';
import {getCreditType} from '../../store/credit-calc/selectors';
import {setIsOfferSuccessAction, setOfferIsActiveAction, setCreditIsNotChosen, clearInfoAction} from '../../store/actions';
import InputMask from 'react-input-mask';
import {getDurationName} from '../../utils';
import {CREDIT_TYPE} from '../../const';
import PropTypes from 'prop-types';

const Offer = ({isActive, creditSum, creditDuration, creditType, firstPayment, offerNumber, onSubmit, onClearInfo}) => {

    if (!isActive) {
        return (``)
    }

    const submitHandler = () => (evt) => {
        evt.preventDefault();
        onSubmit();
        onClearInfo()
    }

    return (
        <div className="credit-calc__request-wrapper">
            <form onSubmit={submitHandler()} action="POST" className="credit-calc__request">
                <h2 className="credit-calc__title credit-calc__title--request">Шаг 3. Оформление заявки</h2>
                <ul className="credit-calc__request-info-list">
                    <li className="credit-calc__request-info-item">
                        <span className="credit-calc__request-info-type">Номер заявки</span>
                        <span className="credit-calc__request-info-value credit-calc__request-info-value--id">№ {offerNumber}</span>
                    </li>

                    <li className="credit-calc__request-info-item">
                        <span className="credit-calc__request-info-type">Цель кредита</span>
                        <span className="credit-calc__request-info-value credit-calc__request-info-value--credit-type">{creditType === CREDIT_TYPE.MORTGAGE ? `Ипотека` : `Автомобильный кредит`}</span>
                    </li>

                    <li className="credit-calc__request-info-item">
                        <span className="credit-calc__request-info-type">Стоимость {creditType === CREDIT_TYPE.MORTGAGE ? `недвижимости` : `автомобиля`}</span>
                        <span className="credit-calc__request-info-value credit-calc__request-info-value--credit-amount">{creditSum}</span>
                    </li>

                    <li className="credit-calc__request-info-item">
                        <span className="credit-calc__request-info-type">Первоначальный взнос</span>
                        <span className="credit-calc__request-info-value credit-calc__request-info-value--first-payment">{firstPayment} рублей</span>
                    </li>

                    <li className="credit-calc__request-info-item">
                        <span className="credit-calc__request-info-type">Срок кредитования</span>
                        <span className="credit-calc__request-info-value credit-calc__request-info-value--credit-duration">{creditDuration}{getDurationName(creditDuration)}</span>
                    </li>
                </ul>
                <div className="credit-calc__request-inputs-block">
                    <div className="credit-calc__name-input-wrapper">
                        <input onInput={(evt) => {
                            localStorage.setItem('name', evt.target.value)
                        }}  autoFocus placeholder="ФИО" type="text" className="credit-calc__request-input credit-calc__request-input--name" required={true}/>
                    </div>
                    <div className="credit-calc__inputs-wrapper">
                        <InputMask onInput={(evt) => {
                            localStorage.setItem('telephone', evt.target.value)
                        }} className="credit-calc__request-input credit-calc__request-input--tel" placeholder="Телефон" mask="+7 (999) 999-99-99" required={true} />
                        <input onInput={(evt) => {
                            localStorage.setItem('email', evt.target.value)
                        }} placeholder="E-mail" type="email" className="credit-calc__request-input credit-calc__request-input--email" required={true}/>
                    </div>
                </div>

                <button type="submit" className="credit-calc__send-request-button">Отправить</button>
            </form>
        </div>
    )
}

Offer.propTypes = {
    isActive: PropTypes.bool,
    creditSum: PropTypes.number,
    creditDuration: PropTypes.number,
    creditType: PropTypes.string,
    firstPayment: PropTypes.number,
    offerNumber: PropTypes.number,
    onSubmit: PropTypes.func,
    onClearInfo: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        isActive: getIsActive(state),
        creditSum: getCreditSum(state),
        creditDuration: getCreditDuration(state),
        creditType: getCreditType(state),
        firstPayment: getFirstPayment(state),
        offerNumber: getOfferNumber(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    onSubmit() {
        dispatch(setOfferIsActiveAction(false));
        dispatch(setCreditIsNotChosen());
        dispatch(setIsOfferSuccessAction(true));
    },

    onClearInfo() {
        dispatch(clearInfoAction());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Offer)