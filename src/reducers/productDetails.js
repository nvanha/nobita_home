import * as Types from "./../constants/ActionTypes";

const initialState = {
  sku: "",
  name: "",
  image01: "",
  image02: "",
  slug: "",
  categorySlug: "",
  description: "",
  colors: [],
  size: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PRODUCT_BY_SLUG: {
      state = action.products.find((e) => e.slug === action.slug);
      return state;
    }
    default:
      return state;
  }
};

export default products;
