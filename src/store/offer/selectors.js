import {NameSpace} from '../reducer';

export const getIsActive = (state) => state[NameSpace.OFFER].isActive;
export const getOfferNumber = (state) => state[NameSpace.OFFER].offerNumber;
export const getIsSuccess = (state) => state[NameSpace.OFFER].isSuccess;