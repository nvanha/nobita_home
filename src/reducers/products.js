import * as Types from "./../constants/ActionTypes";

const initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ALL_PRODUCTS: {
      state = action.products;
      return [...state];
    }
    case Types.GET_PRODUCTS: {
      const state = action.products;
      const max = state.length - action.quantity;
      const min = 0;
      const start = Math.floor(Math.random() * (max - min) + min);
      return state.slice(start, start + action.quantity);
    }
    default:
      return [...state];
  }
};

export default products;
