import { combineReducers } from "redux";

import products from "./products";
import productDetails from "./productDetails";
import cart from "./cart";

const Reducers = combineReducers({
  products,
  productDetails,
  cart,
});

export default Reducers;
