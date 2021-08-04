export const ActionType = {
    SET_MORTGAGE_PARAMS: `credit-calc/setMortgageParams`,
    SET_CAR_PARAMS: `credit-calc/setCarParams`,
    SET_CREDIT_TYPE: `credit-calc/setCreditType`,
    SET_OFFER_IS_ACTIVE: `offer/setOfferIsActive`,
    SET_IS_CREDIT_ACCEPTED: `params/setIsCreditAccepted`,
    SET_CREDIT_SUM: `params/setCreditSum`,
    SET_CREDIT_PERCENT: `params/setCreditPercent`,
    SET_CREDIT_DURATION: `params/setCreditDuration`,
    SET_FIRST_PAYMENT: `params/setFirstPayment`,
    INCREASE_OFFER_NUMBER: `offer/increaseOfferNumber`,
    SET_IS_OFFER_SUCCESS: `offer/setIsOfferSuccess`,
    SET_CREDIT_IS_NOT_CHOSEN: `params/setCreditIsNotChosen`,
    CLEAR_INFO: `clearInfo`
};

export const setMortgageParamsAction = () => ({type: ActionType.SET_MORTGAGE_PARAMS});

export const setCarParamsAction = () => ({type: ActionType.SET_CAR_PARAMS});

export const setCreditTypeAction = (type) => ({type: ActionType.SET_CREDIT_TYPE, payload: type});

export const setCreditIsNotChosen = () => ({type: ActionType.SET_CREDIT_IS_NOT_CHOSEN})

export const setOfferIsActiveAction = (bool = true) => ({type: ActionType.SET_OFFER_IS_ACTIVE, payload: bool});

export const setIsCreditAcceptedAction = (bool) => ({type: ActionType.SET_IS_CREDIT_ACCEPTED, payload: bool});

export const setCreditSumAction = (sum) => ({type: ActionType.SET_CREDIT_SUM, payload: sum});

export const setCreditPercentAction = (percent) => ({type: ActionType.SET_CREDIT_PERCENT, payload: percent});

export const setCreditDurationAction = (duration) => ({type: ActionType.SET_CREDIT_DURATION, payload: duration});

export const setFirstPaymentAction = (amount) => ({type: ActionType.SET_FIRST_PAYMENT, payload: amount});

export const increaseOfferNumber = () => ({type: ActionType.INCREASE_OFFER_NUMBER});

export const setIsOfferSuccessAction = (bool) => ({type: ActionType.SET_IS_OFFER_SUCCESS, payload: bool});

export const clearInfoAction = () => ({type: ActionType.CLEAR_INFO});

