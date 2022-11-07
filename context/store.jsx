import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import loginReducer from "./states/loginReducer";
import setTokenReducer from "./states/setTokenReducer";

const rootReducer = combineReducers({
  token: setTokenReducer,
  login: loginReducer,
});

const store = configureStore(
  { reducer: rootReducer }
);
export default store;
// const middlewareReducers = [
//   // applyMiddleware(getToken),
//   applyMiddleware(getMeters),
// ];

// const makeStore = () =>
//   configureStore({
//     reducer: {
//       token: setTokenReducer,
//       login: loginReducer,
//       //   [authSlice.name]: authSlice.reducer,
//     },
//     devTools: true,
//   });

// export const wrapper = createWrapper(makeStore);
// creates Redux store
// TODO1: create tokenThunkReducer that recieves jwt token
// TODO2: using 'useDispatch()' in frontent to create changes -> calling reducer/their functions to change state