import {
    setCurrencyConvertationValueAction
  } from "./actions";
  
export const fetchCurrencyList = (convertableCurrency, convertedCurrency, date) => (dispatch, _getState, api) => (
  api.get(`/api/v7/convert?q=${convertableCurrency}_${convertedCurrency}&compact=ultra&date=${date}&apiKey=2f53c1c03f489da57146`)
    .then(({data}) => dispatch(setCurrencyConvertationValueAction((Object.values(Object.values(data)[0])[0])))
)); 