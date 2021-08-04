import {ActionType} from '../actions';

const initialState = {
    isActive: false,
    offerNumber: 0,
    isSuccess: false
};

export const offer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_OFFER_IS_ACTIVE:
      return {
        ...state,
        isActive: action.payload
      };

    case ActionType.SET_IS_OFFER_SUCCESS:
      return {
        ...state,
        isSuccess: action.payload,
        offerNumber: state.offerNumber + action.payload
      };

      case ActionType.CLEAR_INFO:
        return {
          ...state,
          isActive: false,
      }

    default: {
        return {
            ...state
        }
    }

  }
};
