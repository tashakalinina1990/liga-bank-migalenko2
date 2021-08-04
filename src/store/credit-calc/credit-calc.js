import {ActionType} from '../actions';

const initialState = {
    isCreditTypeChosen: false,
    creditType: ``
};

export const creditCalc = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CREDIT_TYPE:
      return {
        ...state,
        isCreditTypeChosen: true,
        creditType: action.payload
      };

    case ActionType.SET_CREDIT_IS_NOT_CHOSEN:
      return {
        ...state,
        isCreditTypeChosen: false
      }

    case ActionType.CLEAR_INFO:
      return {
        ...state,
        isCreditTypeChosen: false,
        creditType: ``
      }

    default: {
        return {
            ...state
        }
    }

  }
};
