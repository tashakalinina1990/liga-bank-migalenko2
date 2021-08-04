import {ActionType} from '../actions';

const initialState = {
    isActive: false,
    propertyCost: {
      MIN: 0,
      MAX: 0,
      STEP: 0
    },
    firstPaymentInfo: {
      PERCENT: 0,
      STEP: 0,
    },
    minCredit: 0,
    creditDurationInfo: {
      MIN: 0,
      MAX: 0,
      STEP: 1
    },
    motherCapital: true,
    percentPayment: {
      MIN_FOR_DISCOUNT: 0,
      LESS_THAN_MIN: 0,
      MORE_THAN_MIN: 0
    },
    minIncomePercent: 0.45,
    isCreditAccepted: true,

    creditSum: 0,
    creditPercent: 0,
    creditDuration: 0,
    firstPayment: 0
};

export const params = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_MORTGAGE_PARAMS:
      return {
        ...state,
        propertyCost: {
          MIN: 1200000,
          MAX: 25000000,
          STEP: 100000
        },
        firstPaymentInfo: {
          PERCENT: 0.1,
          STEP: 0.05,
        },
        minCredit: 500000,
        creditDurationInfo: {
          MIN: 5,
          MAX: 30,
          STEP: 1
        },
        motherCapital: true,
        percentPayment: {
          MIN_FOR_DISCOUNT: 15000000,
          LESS_THAN_MIN: 0.094,
          MORE_THAN_MIN: 0.085,
        }
      };

    case ActionType.SET_CAR_PARAMS:
      return {
        ...state,
        propertyCost: {
          MIN: 500000,
          MAX: 5000000,
          STEP: 50000
        },
        firstPaymentInfo: {
          PERCENT: 0.2,
          STEP: 0.05,
        },
        minCredit: 200000,
        creditDurationInfo: {
          MIN: 1,
          MAX: 5,
          STEP: 1
        },
        motherCapital: false,
        kasko: false,
        lifeInsurance: false,
        percentPayment: {
          MIN_FOR_DISCOUNT: 2000000,
          LESS_THAN_MIN: 0.16,
          MORE_THAN_MIN: 0.15,
          ONE_INSURANCE: 0.085,
          BOTH_INSURANCES: 0.035
        }
      };

      case ActionType.SET_IS_CREDIT_ACCEPTED:
        return {
          ...state,
          isCreditAccepted: action.payload
        }

      case ActionType.SET_CREDIT_SUM:
        return {
          ...state,
          creditSum: action.payload
        }

      case ActionType.SET_CREDIT_PERCENT:
        return {
          ...state,
          creditPercent: action.payload
        }

      case ActionType.SET_CREDIT_DURATION:
        return {
          ...state,
          creditDuration: action.payload
        }

      case ActionType.SET_FIRST_PAYMENT:
        return {
          ...state,
          firstPayment: action.payload
        }

      case ActionType.CLEAR_INFO:
        return {
          ...state,
          isActive: false,
          propertyCost: {
            MIN: 0,
            MAX: 0,
            STEP: 0
          },
          firstPaymentInfo: {
            PERCENT: 0,
            STEP: 0,
          },
          minCredit: 0,
          creditDurationInfo: {
            MIN: 0,
            MAX: 0,
            STEP: 1
          },
          motherCapital: true,
          percentPayment: {
            MIN_FOR_DISCOUNT: 0,
            LESS_THAN_MIN: 0,
            MORE_THAN_MIN: 0
          },
          minIncomePercent: 0.45,
          isCreditAccepted: true,
      
          creditSum: 0,
          creditPercent: 0,
          creditDuration: 0,
          firstPayment: 0
        }

    default: {
        return {
            ...state
        }
    }

  }
};
