import * as Types from "./../constants/ActionTypes";

const initialState = {
  sku: "",
  name: "",
  price: 0,
  image01: "",
  image02: "",
  slug: "",
  categorySlug: "",
  description: "",
  colors: [],
  size: [],
};

const productDetails = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PRODUCT_BY_SLUG: {
      state = action.products.find((e) => e.slug === action.slug);
      return state !== undefined ? state : null;
    }
    default:
      return state;
  }
};

export default productDetails;
