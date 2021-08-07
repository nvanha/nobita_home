import * as Types from "./../constants/ActionTypes";

import productData from "./../assets/fake-data/products";

export const actGetAllProducts = () => ({
  type: Types.GET_ALL_PRODUCTS,
  products: productData,
});

export const actGetProducts = (quantity) => ({
  type: Types.GET_PRODUCTS,
  products: productData,
  quantity,
});
