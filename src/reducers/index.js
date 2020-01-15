import {
  FETCH_CHARTDATA_START,
  FETCH_CHARTDATA_SUCCESS,
  FETCH_CHARTDATA_FAILURE
} from "../actions";

const initialState = {
  chartData: [],
  cryptoData: {
    exchange: "coinbase",
    trading_pair: "btc_usd",
    timeFrame: "Week"
  },
  gettingCryptoData: false,
  gettingCryptoDataError: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARTDATA_START:
      return {
        ...state,
        gettingCryptoData: true,
        gettingCryptoDataError: ""
      };
    case FETCH_CHARTDATA_SUCCESS:
      return {
        ...state,
        gettingCryptoData: false,
        chartData: action.payload,
        gettingCryptoDataError: ""
      };
    case FETCH_CHARTDATA_FAILURE:
      return {
        ...state,
        gettingCryptoData: false,
        gettingCryptoDataError: action.payload
      };
    default:
      return state;
  }
};
