import {NameSpace} from '../reducer';

export const getIsCreditTypeChosen = (state) => state[NameSpace.CREDIT_CALC].isCreditTypeChosen;
export const getCreditType = (state) => state[NameSpace.CREDIT_CALC].creditType;

