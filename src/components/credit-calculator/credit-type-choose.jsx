import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setCreditTypeAction, setMortgageParamsAction, setCarParamsAction, clearInfoAction} from '../../store/actions';
import {getIsCreditTypeChosen} from '../../store/credit-calc/selectors';
import {CREDIT_TYPE} from '../../const';

const CreditTypeChoose = ({onChangeCreditType, onSetCarCreditParams, onSetMortgageCreditParams, onClearInfo, isActive}) => {

    useEffect(() => {
        if (!isActive) {
            document.querySelector('.credit-calc__aim-select__title').textContent = `Выберите цель кредита`;
        }
    }, [isActive])

    const selectClickHandler = () => {
        const selectSingle = document.querySelector('.credit-calc__aim-select');
        if ('active' === selectSingle.getAttribute('data-state')) {
            selectSingle.setAttribute('data-state', '');
        } else {
            selectSingle.setAttribute('data-state', 'active');
        }
    }

    const selectOptionClickHandler = () => (evt) => {
        const selectSingle = document.querySelector('.credit-calc__aim-select');
        const selectSingle_title = document.querySelector('.credit-calc__aim-select__title');
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
        onClearInfo();
        if (evt.target.getAttribute('data') === CREDIT_TYPE.MORTGAGE) {
            onSetMortgageCreditParams()
        } else {
            onSetCarCreditParams()
        }
        onChangeCreditType(evt.target.getAttribute('data'));
    }

    return (
        <div className="credit-calc__aim">
            <label htmlFor="credit-aim" className="credit-calc__title">Шаг 1. Цель кредита</label>
            <div  className="credit-calc__aim-select" data-state="">
                <div onClick={selectClickHandler} className="credit-calc__aim-select__title" data="default">Выберите цель кредита</div>
                <div  className="credit-calc__aim-select__content">
                    <input id="singleSelect0"  className="credit-calc__aim-select__input" type="radio" name="singleSelect" />
                    <label data="mortgage" onClick={selectOptionClickHandler()} htmlFor="singleSelect0"  className="credit-calc__aim-select__label">Ипотечное кредитование</label>
                    <input id="singleSelect1"  className="credit-calc__aim-select__input" type="radio" name="singleSelect" />
                    <label data="car" onClick={selectOptionClickHandler()} htmlFor="singleSelect1"  className="credit-calc__aim-select__label">Автомобильное кредитование</label>
                </div>
            </div>
        </div>
    )
}

CreditTypeChoose.propTypes = {
    onChangeCreditType: PropTypes.func,
    onSetCarCreditParams: PropTypes.func,
    onSetMortgageCreditParams: PropTypes.func,
    onClearInfo: PropTypes.func,
    isActive: PropTypes.bool
}

const mapStateToProps = (state) => {
    return {
        isActive: getIsCreditTypeChosen(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    onChangeCreditType(type) {
        dispatch(setCreditTypeAction(type));
    },

    onSetMortgageCreditParams() {
        dispatch(setMortgageParamsAction());
    },

    onSetCarCreditParams() {
        dispatch(setCarParamsAction());
    },

    onClearInfo() {
        dispatch(clearInfoAction());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreditTypeChoose);