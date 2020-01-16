import {
  FETCH_CHARTDATA_START,
  FETCH_CHARTDATA_SUCCESS,
  FETCH_CHARTDATA_FAILURE,
  SET_OPTIONS_START
} from "../actions";

const initialState = {
  chartData: [],
  options: {
    exchange: "coinbase",
    trading_pair: "btc_usd",
    timeFrame: "Day"
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
    case SET_OPTIONS_START:
      return {
        ...state,
        options: action.payload
      };
    default:
      return state;
  }
};
