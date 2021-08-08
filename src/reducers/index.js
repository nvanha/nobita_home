import { combineReducers } from "redux";

import products from "./products";
import productDetails from "./productDetails";

const Reducers = combineReducers({
  products,
  productDetails,
});

export default Reducers;
