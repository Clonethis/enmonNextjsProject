import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./states/loginReducer";
import setTokenReducer from "./states/setTokenReducer";

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
export default configureStore({
  reducer: {
    // meters: fetchMeters,

    token: setTokenReducer,
    login: loginReducer,
  },
});
