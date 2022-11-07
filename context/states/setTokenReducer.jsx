import axios from "axios";
import initialState from "./appState";

export default function setTokenReducer(state = initialState, action) {
  if (action.type === "set/UserJsxToken") {
    return {
      ...state,
      loggedIn: true,
      token: action.payload,
    };
  }

  return state;
}

export function removeToken(state = initialState, action) {
  if (action.type === "remove/UserJsxToken") {
    return {
      ...state,
      loggedIn: false,
      token: "",
    };
  }

  return state;
}

export function getToken(email, password) {
  console.log("getToken:", email, password);
  return async function saveNewTokenThunk(dispatch) {
    const initialCredentials = { email, password };

    // if (getState) {
    const response = await axios
      .post("https://tools.dev.enmon.tech/api/auth/local", {
        identifier: initialCredentials.email,
        password: initialCredentials.password,
      })
      .then((response) => {
        dispatch({ type: "set/UserJsxToken", payload: response.data.jwt });
      });
    // }
  };
}
