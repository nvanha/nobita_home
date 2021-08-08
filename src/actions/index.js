import * as Types from "./../constants/ActionTypes";

import productData from "./../assets/fake-data/products";

// Products
export const actGetAllProducts = () => ({
  type: Types.GET_ALL_PRODUCTS,
  products: productData,
});

export const actGetProductsByQuantity = (quantity) => ({
  type: Types.GET_PRODUCTS_BY_QUANTITY,
  products: productData,
  quantity,
});

export const actGetProductsByCategory = (categorySlug) => ({
  type: Types.GET_PRODUCTS_BY_CATEGORY,
  products: productData,
  categorySlug,
});

export const actFilterProducts = (keyword) => ({
  type: Types.FILTER_PRODUCTS,
  keyword,
});

// Product Details
export const actGetProductBySlug = (slug) => ({
  type: Types.GET_PRODUCT_BY_SLUG,
  products: productData,
  slug,
});
