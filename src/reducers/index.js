const initialState = {
  cryptoData: {
    exchange: "coinbase",
    trading_pair: "btc_usd",
    timeFrame: "Week"
  }
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
