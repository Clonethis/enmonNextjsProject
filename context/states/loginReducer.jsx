import { initialState } from "./appState";
("login/LogIn");
("login/LogOut");
// ("login/Credentials");
("login/CredentialsDestroyer");
("set/UserJsxToken");
("fetch/FetchMeters");
export default function loginReducer(state = initialState, action) {
  //   if ((action.type = "login/Credentials")) {
  //     // ,state.userCredentials[1]:password,
  //     return {
  //       ...state,
  //       email: email,
  //       password: password,
  //     };}
  if ((action.type = "login/LogIn")) {
    // console.log("Logged in", state);
    return {
      ...state,
      loggedIn: true,
    };
  }
  if ((action.type = "login/LogOut")) {
    // console.log("Logged in", state);
    return {
      ...state,
      loggedIn: false,
      token: "",
    };
  }
  // TODO request jsx token (maybe using THUNK or something similar)
  return state;
}
