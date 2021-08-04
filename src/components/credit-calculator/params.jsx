import React from 'react';
import {connect} from 'react-redux';
import RequestInfo from './request-info';
import {setCreditSumAction, setIsCreditAcceptedAction, setCreditPercentAction, setCreditDurationAction, setFirstPaymentAction} from '../../store/actions';
import {getIsCreditTypeChosen, getCreditType} from '../../store/credit-calc/selectors';
import {
    getPropertyCost,
    getFirstPaymentInfo,
    getMinCredit,
    getCreditDurationInfo,
    getPercentPayment,
} from '../../store/params/selectors';
import Checkboxes from './checkboxes';
import {getDurationName, debounce} from '../../utils';
import {CREDIT_TYPE} from '../../const';
import PropTypes from 'prop-types';

const Params = ({
        isActive,
        creditType,
        propertyCost,
        firstPayment,
        minCredit,
        creditDurationInfo,
        percentPayment,
        onFirstPaymentChange,
        onCreditSumChange,
        onCreditPercentChange,
        onCreditDurationChange,
        onFirstPaymentInput
    }) => {

    let motherCapital = 0;

    if (!isActive) {
        return (``);
    }  

    const getMaxFirstPaymentPercent = () => {
        const creditAmount = document.querySelector(`#credit-input`).value;
        const num = (creditAmount - minCredit - motherCapital) / creditAmount * 100 / 5 * 5;
        if (num / creditAmount * 100 % 5 === 0) {
            return (Math.floor(num / 5) * 5);
        } else {
            return (Math.floor(num / 5) * 5 + 5)
        }
    }

    const clearInput = () => (evt) => {
        evt.target.value = ``;
        evt.target.closest(`div`).querySelector(`.credit-calc__params-custom-input`).textContent = `0 рублей`;
    }

    const checkCreditPercentPerMonth = () => {
        if (CREDIT_TYPE.MORTGAGE === creditType) {
            if (document.querySelector(`#first-payment`).value >= percentPayment.MIN_FOR_DISCOUNT) {
                onCreditPercentChange(percentPayment.MORE_THAN_MIN)
            } else {
                onCreditPercentChange(percentPayment.LESS_THAN_MIN)
            }
        } else {
            const isLifeInsuranseChecked = document.querySelector(`#life-insurance`).checked;
            const isKaskoChecked = document.querySelector(`#kasko`).checked;
            if (isLifeInsuranseChecked && isKaskoChecked) {
                onCreditPercentChange(percentPayment.BOTH_INSURANCES)
            } else if (isLifeInsuranseChecked || isKaskoChecked) {
                onCreditPercentChange(percentPayment.ONE_INSURANCE)
            } else if (document.querySelector(`#first-payment`).value >= percentPayment.MIN_FOR_DISCOUNT) {
                onCreditPercentChange(percentPayment.MORE_THAN_MIN)
            } else {
                onCreditPercentChange(percentPayment.LESS_THAN_MIN)
            }
        }
    }

    const creditInputValidationCheck = debounce((evt) => {
        const creditAmountInput = document.querySelector(`#credit-input`);
        const firstPaymentInput =  document.querySelector(`#first-payment`);
        const firstPaymentPercent = document.querySelector(`#first-payment-percent`);
        const firstPaymentCustomInput = firstPaymentInput.closest(`div`).querySelector(`.credit-calc__params-custom-input`);

        if (creditAmountInput.value < propertyCost.MIN || creditAmountInput.value > propertyCost.MAX) {
            evt.target.closest(`div`).querySelector(`.credit-calc__params-custom-input`).textContent = `Некорректное значение`;
            document.querySelector(`.credit-calc__credit-input-block-wrapper`).classList.add(`credit-calc__credit-input-block-wrapper--incorrect`);
        } else {
            document.querySelector(`.credit-calc__credit-input-block-wrapper`).classList.remove(`credit-calc__credit-input-block-wrapper--incorrect`);
            checkCreditPercentPerMonth()
            firstPaymentPercent.setAttribute("max", getMaxFirstPaymentPercent())
            evt.target.closest(`div`).querySelector(`.credit-calc__params-custom-input`).textContent = Number(creditAmountInput.value).toLocaleString('ru') + ` рублей`;
            firstPaymentCustomInput.textContent = Number(creditAmountInput.value * firstPayment.PERCENT).toLocaleString('ru') + ` рублей`;
            firstPaymentInput.value = creditAmountInput.value * firstPayment.PERCENT;
            firstPaymentPercent.value = firstPayment.PERCENT * 100;
            onCreditSumChange(creditAmountInput.value - motherCapital - firstPaymentInput.value)
        }        
    }, 1000);

    const firstPaymentInputValidationCheck = debounce(() => {
        checkCreditPercentPerMonth()
        const firstPaymentInput =  document.querySelector(`#first-payment`);
        const firstPaymentPercent = document.querySelector(`#first-payment-percent`);
        const creditAmountInput = document.querySelector(`#credit-input`);

        document.querySelector(`#first-payment-percent`).value = firstPayment.PERCENT * 100;
        console.log(motherCapital)

        const MAX = creditAmountInput.value - motherCapital - minCredit;
        if (document.querySelector(`#first-payment`).value < creditAmountInput.value * firstPayment.PERCENT) {
            firstPaymentInput.closest(`div`).querySelector(`.credit-calc__credit-input`).value = propertyCost.MIN * firstPayment.PERCENT;
            onFirstPaymentChange(true); 
        } else if (firstPaymentInput.value > MAX) {
            onFirstPaymentChange(false); 
        } else {
            onFirstPaymentChange(true); 
        }
        firstPaymentPercent.setAttribute("max", getMaxFirstPaymentPercent());
        onCreditSumChange(creditAmountInput.value - motherCapital - firstPaymentInput.value)
        firstPaymentInput.closest(`div`).querySelector(`.credit-calc__params-custom-input`).textContent = Number(firstPaymentInput.closest(`div`).querySelector(`.credit-calc__credit-input`).value).toLocaleString('ru') + ` рублей`;
        onFirstPaymentInput(document.querySelector(`#first-payment`).value)
    }, 1000);

    const creditDurationInputValidationCheck = debounce((evt) => {
        if (evt.target.closest(`div`).querySelector(`.credit-calc__credit-input`).value < creditDurationInfo.MIN) {
            evt.target.closest(`div`).querySelector(`.credit-calc__credit-input`).value = creditDurationInfo.MIN;
        } else if (evt.target.closest(`div`).querySelector(`.credit-calc__credit-input`).value > creditDurationInfo.MAX) {
            evt.target.closest(`div`).querySelector(`.credit-calc__credit-input`).value = creditDurationInfo.MAX;
        }
        evt.target.closest(`div`).querySelector(`.credit-calc__params-custom-input`).textContent = Number(evt.target.closest(`div`).querySelector(`.credit-calc__credit-input`).value).toLocaleString('ru') + getDurationName(Number(evt.target.value));
        document.querySelector(`#credit-duration-range`).value = evt.target.value;
    }, 500);

    const firstPaymentRangeCheck = debounce((percent) => {
        const firstPaymentInput =  document.querySelector(`#first-payment`);
        const creditAmountInput = document.querySelector(`#credit-input`);
        console.log(motherCapital)

        if (Number(percent) === getMaxFirstPaymentPercent()) {
            percent = (creditAmountInput.value - minCredit - motherCapital) / document.querySelector(`#credit-input`).value * 100 / 5 * 5;
            firstPaymentInput.value = Number(creditAmountInput.value * percent)
        }

        firstPaymentInput.value = creditAmountInput.value * percent / 100;
        document.querySelector(`#first-payment + label`).textContent = (document.querySelector(`#credit-input`).value * percent / 100).toLocaleString('ru') + ` рублей`;
        onCreditSumChange(creditAmountInput.value - motherCapital - firstPaymentInput.value)
    }, 500);

    const CreditDurationRangeCheck = debounce((evt) => {
        document.querySelector(`#credit-duration-input + label`).textContent = evt.target.value + getDurationName(evt.target.value);
    }, 200);

    const creditInputChangeHandler = () => (evt) => {
        creditInputValidationCheck(evt);
        evt.target.closest(`div`).querySelector(`.credit-calc__params-custom-input`).textContent = Number(evt.target.closest(`div`).querySelector(`.credit-calc__credit-input`).value).toLocaleString('ru') + ` рублей`;
    }

    const firstPaymentInputChangeHandler = () => (evt) => {
        firstPaymentInputValidationCheck();
        evt.target.closest(`div`).querySelector(`.credit-calc__params-custom-input`).textContent = Number(evt.target.closest(`div`).querySelector(`.credit-calc__credit-input`).value).toLocaleString('ru') + ` рублей`;

    }

    const creditDurationInputHandler = () => (evt) => {
        creditDurationInputValidationCheck(evt);
        evt.target.closest(`div`).querySelector(`.credit-calc__params-custom-input`).textContent = Number(evt.target.closest(`div`).querySelector(`.credit-calc__credit-input`).value) + getDurationName(evt.target.value);
        onCreditDurationChange(evt.target.value)
    }

    const creditDurationRangeHandler = () => (evt) => {
        CreditDurationRangeCheck(evt);
        onCreditDurationChange(evt.target.value)
    }

    const increaseButtonClickHandler = () => (evt) => {
        creditInputValidationCheck(evt);
        document.querySelector(`#credit-input`).value = Number(document.querySelector(`#credit-input`).value) + propertyCost.STEP;
        evt.target.closest(`div`).querySelector(`.credit-calc__params-custom-input`).textContent = Number(document.querySelector(`#credit-input`).value).toLocaleString('ru') + ` рублей`;
    }

    const decreaseButtonClickHandler = () => (evt) => {
        creditInputValidationCheck(evt);
        document.querySelector(`#credit-input`).value = Number(document.querySelector(`#credit-input`).value) - propertyCost.STEP;
        evt.target.closest(`div`).querySelector(`.credit-calc__params-custom-input`).textContent = Number(document.querySelector(`#credit-input`).value).toLocaleString('ru') + ` рублей`;
    }

    const firstPaymentRangeChange = () => (evt) => {
        firstPaymentRangeCheck(evt.target.value);
    }

    const motherCapitalChangeHandler = () => (evt) => {
        if(evt.target.checked) {
            motherCapital = 470000;
            firstPaymentInputValidationCheck()
        } else {
            motherCapital = 0
            firstPaymentInputValidationCheck()
        }
    }

    return (
        <>
            <div className="credit-calc__params">
                <h2 className="credit-calc__title">Шаг 2. Введите параметры кредита</h2>
                <div className="credit-calc__params-section">
                    <label htmlFor="credit-input" className="credit-calc__params-label">{CREDIT_TYPE.CAR === creditType ? `Стоимость автомобиля` : `Стоимость недвижимости`}</label>
                    <div className="credit-calc__credit-input-block-wrapper">
                        <button onClick={decreaseButtonClickHandler()} className="credit-calc__credit-amount-change-button credit-calc__credit-amount-change-button--decrease"></button>
                        
                        <div className="credit-calc__credit-input-wrapper">
                            <label htmlFor="credit-input" className="credit-calc__params-custom-input">0 рублей</label>
                            <input onFocus={clearInput()} onChange={creditInputChangeHandler()} id="credit-input" type="number" placeholder="0" className="credit-calc__credit-input" />
                        </div>
                        

                        <button onClick={increaseButtonClickHandler()} className="credit-calc__credit-amount-change-button credit-calc__credit-amount-change-button--increase"></button>
                    </div>
                    <span className="credit-calc__credit-amount-info">{CREDIT_TYPE.CAR === creditType ? `От 500 000  до 5 000 000 рублей` : `От 1 200 000  до 25 000 000 рублей`}</span>
                </div>

                <div className="credit-calc__params-section">
                    <label htmlFor="first-payment-input" className="credit-calc__params-label">Первоначальный взнос</label>

                    <div className="credit-calc__credit-input-block-wrapper">
                        <input onFocus={clearInput()} onChange={firstPaymentInputChangeHandler()} id="first-payment" type="number" placeholder="0" className="credit-calc__credit-input" /> 
                        <label htmlFor="first-payment" className="credit-calc__params-custom-input">0 рублей</label>
                        
                    </div>

                    <div  className="credit-calc__range">
                        <input type="range" onChange={firstPaymentRangeChange()} id='first-payment-percent' defaultValue={CREDIT_TYPE.CAR === creditType ? `20` : `10`} min={CREDIT_TYPE.CAR === creditType ? `20` : `10`}  step="5" className="credit-calc__range-input" />
                    </div>
                    <div className="credit-calc__min-max-range">
                        <span className="credit-calc__range-amount">{CREDIT_TYPE.CAR === creditType ? `20%` : `10%`}</span>
                    </div>
                </div>
            

                <div className="credit-calc__params-section">
                    <label htmlFor="credit-duration-input" className="credit-calc__params-label">Срок кредитования</label>

                    <div className="credit-calc__credit-input-block-wrapper">
                        
                        <input onFocus={clearInput()} onChange={creditDurationInputHandler()} id="credit-duration-input" placeholder={CREDIT_TYPE.CAR === creditType ? `1` : `5`} type="number" className="credit-calc__credit-input" />
                        <label htmlFor="credit-duration-input" className="credit-calc__params-custom-input">5 лет</label>
                    </div>

                    <div  className="credit-calc__range">
                        <input onChange={creditDurationRangeHandler()} id="credit-duration-range"type="range" min={CREDIT_TYPE.CAR === creditType ? `1` : `5`} max={CREDIT_TYPE.CAR === creditType ? `5` : `30`} defaultValue={CREDIT_TYPE.CAR === creditType ? `1` : `5`} step="1" className="credit-calc__range-input" />
                    </div>
                    <div className="credit-calc__min-max-range">
                        <span className="credit-calc__range-amount">{CREDIT_TYPE.CAR === creditType ? `1 год` : `5 лет`}</span>
                        <span className="credit-calc__range-amount">{CREDIT_TYPE.CAR === creditType ? `5 лет` : `30 лет`}</span>
                    </div>
                </div>

                <Checkboxes isMortgage={CREDIT_TYPE.MORTGAGE === creditType} motherCapitalChangeHandler={motherCapitalChangeHandler} carCreditCheckboxesHandler={checkCreditPercentPerMonth}  />
            </div>

            <div className="credit-calc__offer">
                {<RequestInfo />}
            </div>
        </>
    )
}

Params.propTypes = {
    isActive: PropTypes.bool,
    creditType: PropTypes.string,
    propertyCost: PropTypes.object,
    firstPayment: PropTypes.object,
    minCredit: PropTypes.number,
    creditDurationInfo: PropTypes.object,
    percentPayment: PropTypes.object,
    onFirstPaymentChange: PropTypes.func,
    onCreditSumChange: PropTypes.func,
    onCreditPercentChange: PropTypes.func,
    onCreditDurationChange: PropTypes.func,
    onFirstPaymentInput: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        isActive: getIsCreditTypeChosen(state),
        creditType: getCreditType(state),
        propertyCost: getPropertyCost(state),
        firstPayment: getFirstPaymentInfo(state),
        minCredit: getMinCredit(state),
        creditDurationInfo: getCreditDurationInfo(state),
        percentPayment: getPercentPayment(state)
    };
};

const mapDispatchToProps = (dispatch) => ({
    onFirstPaymentChange(bool) {
        dispatch(setIsCreditAcceptedAction(bool));
    },

    onCreditSumChange(sum) {
        dispatch(setCreditSumAction(sum))
    }, 

    onCreditPercentChange(percent) {
        dispatch(setCreditPercentAction(percent))
    },

    onCreditDurationChange(duration) {
        dispatch(setCreditDurationAction(duration))
    },

    onFirstPaymentInput(amount) {
        dispatch(setFirstPaymentAction(amount))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Params);