import React, {} from 'react';
import Params from './params';
import Offer from './offer';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setCreditTypeAction, setMortgageParamsAction, setCarParamsAction, clearInfoAction} from '../../store/actions';
import {getIsCreditTypeChosen} from '../../store/credit-calc/selectors';
import CreditTypeChoose from './credit-type-choose';

const CreditCalc = ({isActive}) => {


    return (
        <section id="credit-calc" className="credit-calc">
            <div className="credit-calc__center-wrapper center-wrapper">
                <h2 className="credit-calc__main-title">Кредитный калькулятор</h2>
                <div className={isActive ? `credit-calc__create-request-block credit-calc__create-request-block--open` : `credit-calc__create-request-block`}>
                    
                    <CreditTypeChoose />

                    <Params />

                </div>
               
                <Offer />
                
            </div>
        </section>
    )
}

CreditCalc.propTypes = {
    isActive: PropTypes.bool.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(CreditCalc);