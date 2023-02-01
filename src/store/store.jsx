import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
// import productClassesReducer from "./slices/productClasses";
export const store = configureStore({
  reducer : rootReducer,
  // reducer: {
  //   productClass: productClassesReducer,
  // },
  devTools: true,
});

export const AppDispatch = typeof store.dispatch;
// export default store;
