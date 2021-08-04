import {NameSpace} from '../reducer';

export const getIsActive = (state) => state[NameSpace.PARAMS].isActive;
export const getPropertyCost = (state) => state[NameSpace.PARAMS].propertyCost;
export const getFirstPaymentInfo = (state) => state[NameSpace.PARAMS].firstPaymentInfo;
export const getMinCredit = (state) => state[NameSpace.PARAMS].minCredit;
export const getCreditDurationInfo = (state) => state[NameSpace.PARAMS].creditDurationInfo;
export const getMotherCapital = (state) => state[NameSpace.PARAMS].motherCapital;
export const getPercentPayment = (state) => state[NameSpace.PARAMS].percentPayment;
export const getMinIncomePercent = (state) => state[NameSpace.PARAMS].minIncomePercent;
export const getPaymentFunc = (state) => state[NameSpace.PARAMS].paymentFunc;
export const getIsCreditAccepted = (state) => state[NameSpace.PARAMS].isCreditAccepted;
export const getCreditSum = (state) => state[NameSpace.PARAMS].creditSum;
export const getCreditPercent = (state) => state[NameSpace.PARAMS].creditPercent;
export const getCreditDuration = (state) => state[NameSpace.PARAMS].creditDuration;
export const getFirstPayment = (state) => state[NameSpace.PARAMS].firstPayment;


