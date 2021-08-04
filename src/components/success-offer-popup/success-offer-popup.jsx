import React from 'react';
import {connect} from 'react-redux';
import {getIsSuccess} from '../../store/offer/selectors';
import {setIsOfferSuccessAction} from '../../store/actions';
import PropTypes from 'prop-types';

const SuccessOfferPopup = ({isSuccess, onClosePopup}) => {
    if (!isSuccess) {
        return (``)
    }

    const closePopupByEsc = (evt) => {
        if (evt.key === `Escape`) {
            onClosePopup();
            window.removeEventListener(`keydown`, closePopupByEsc)
        }
    }

    const windowKeydownHandler = (evt) => closePopupByEsc;

    window.addEventListener(`keydown`, windowKeydownHandler())

    const closeButtonClickHandler = () => {
        onClosePopup();
    }

    return (
        <div className="success-popup">
            <div className="success-popup__wrapper">
                <button onClick={closeButtonClickHandler} className="success-popup__close-btn"></button>
                <h2 className="success-popup__title">Спасибо за обращение в наш банк.</h2>
                <p className="success-popup__description">Наш менеджер скоро свяжется с вами по указанному номеру телефона.</p>
            </div>
        </div>
    )
}

SuccessOfferPopup.propTypes = {
    isSuccess: PropTypes.bool,
    onClosePopup: PropTypes.func,
}

const mapStateToProps = (state) => {
    return {
        isSuccess: getIsSuccess(state)

    };
};

const mapDispatchToProps = (dispatch) => ({
    onClosePopup() {
        dispatch(setIsOfferSuccessAction(false))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SuccessOfferPopup);