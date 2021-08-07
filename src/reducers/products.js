import * as Types from "./../constants/ActionTypes";

const initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ALL_PRODUCTS: {
      state = action.products;
      return [...state];
    }
    case Types.GET_PRODUCTS_BY_QUANTITY: {
      state = action.products;
      const max = state.length - action.quantity;
      const min = 0;
      const start = Math.floor(Math.random() * (max - min) + min);
      return state.slice(start, start + action.quantity);
    }
    case Types.GET_PRODUCTS_BY_CATEGORY: {
      state = action.products.filter(
        (product) => product.categorySlug === action.categorySlug
      );
      return [...state];
    }
    case Types.FILTER_PRODUCTS: {
      if (action.keyword === "nameAsc") {
        state.sort((a, b) => {
          let product1 = a.name.toLowerCase();
          let product2 = b.name.toLowerCase();

          return product1 > product2 ? 1 : -1;
        });
      } else if (action.keyword === "nameDesc") {
        state.sort((a, b) => {
          let product1 = a.name.toLowerCase();
          let product2 = b.name.toLowerCase();

          return product1 > product2 ? -1 : 1;
        });
      } else if (action.keyword === "priceAsc") {
        state.sort((a, b) => a.price - b.price);
      } else if (action.keyword === "priceDesc") {
        state.sort((a, b) => b.price - a.price);
      }
      return [...state];
    }
    default:
      return [...state];
  }
};

export default products;
