import {
  FETCH_CHARTDATA_START,
  FETCH_CHARTDATA_SUCCESS,
  FETCH_CHARTDATA_FAILURE,
  FETCH_COMPARE_CHARTDATA_START,
  FETCH_COMPARE_CHARTDATA_SUCCESS,
  FETCH_COMPARE_CHARTDATA_FAILURE,
  SET_OPTIONS_START,
  SET_COMPARE_OPTIONS_START,
  TOGGLE_SWITCH_START
} from "../actions";

const initialState = {
  chartData: [],
  compareData: [],
  options: {
    exchange: "hitbtc",
    trading_pair: "btc_usd",
    timeFrame: "Month"
  },
  compareOptions: {
    exchange: "bitfinex",
    trading_pair: "btc_usd",
    timeFrame: "Month"
  },

  gettingCryptoData: false,
  gettingCryptoDataError: null,
  gettingCompareCryptoData: false,
  gettingCompareCryptoError: null,
  switchToggled: false
};

export const projectReducer = (state = initialState, action) => {
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
    case FETCH_COMPARE_CHARTDATA_START:
      return {
        ...state,
        gettingCompareCryptoData: true,
        gettingCompareCryptoError: ""
      };
    case FETCH_COMPARE_CHARTDATA_SUCCESS:
      return {
        ...state,
        gettingCompareCryptoData: false,
        compareData: action.payload,
        gettingCompareCryptoError: ""
      };
    case FETCH_COMPARE_CHARTDATA_FAILURE:
      return {
        ...state,
        gettingCompareCryptoData: false,
        gettingCompareCryptoError: action.payload
      };
    case SET_OPTIONS_START:
      return {
        ...state,
        options: action.payload
      };
    case SET_COMPARE_OPTIONS_START:
      return {
        ...state,
        compareOptions: action.payload
      };
    case TOGGLE_SWITCH_START:
      return {
        ...state,
        switchToggled: action.payload
      };
    default:
      return state;
  }
};
