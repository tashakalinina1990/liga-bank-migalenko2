import {combineReducers} from 'redux';
import {creditCalc} from './credit-calc/credit-calc';
import {params} from './params/params';
import {offer} from './offer/offer';

export const NameSpace = {
  CREDIT_CALC: `CREDIT_CALC`,
  PARAMS: `PARAMS`,
  OFFER: `OFFER`
};

export default combineReducers({
  [NameSpace.CREDIT_CALC]: creditCalc,
  [NameSpace.PARAMS]: params,
  [NameSpace.OFFER]: offer
});
