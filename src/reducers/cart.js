import * as Types from "./../constants/ActionTypes";

const data = JSON.parse(localStorage.getItem("CART"));
const initialState = data ? data : [];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_TO_CART: {
      let { product, details } = action;
      let index = state.findIndex((e) => e.product.sku === product.sku);
      if (index !== -1) {
        if (
          state[index].details.color === details.color &&
          state[index].details.size === details.size
        ) {
          state[index].details.discount = details.discount;
          state[index].details.quantity += details.quantity;
        } else {
          let newItem = {
            product,
            details,
          };
          state.push(newItem);
        }
      } else {
        let newItem = {
          product,
          details,
        };
        state.push(newItem);
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    }
    case Types.DELETE_PRODUCT_IN_CART: {
      const { product, details } = action.item;
      const index = state.findIndex(
        (e) =>
          e.product.sku === product.sku &&
          e.details.color === details.color &&
          e.details.size === details.size
      );
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    }
    default:
      return [...state];
  }
};

export default cart;
