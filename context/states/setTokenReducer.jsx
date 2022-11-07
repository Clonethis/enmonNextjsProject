import axios from "axios";
import { store } from "../store";
import { initialState } from "./appState";
export default function setTokenReducer(state = initialState, action) {
  console.log("in reducer token", state, action);
  if (action.type == "set/UserJsxToken") {
    return {
      ...state,
      token: action.payload.jwt,
    };
  }

  return state;
}

export function getToken(email, password) {
  console.log("getToken:", email, password);
  return async function saveNewTokenThunk(dispatch, getState) {
    const initialCredentials = { email, password };
    if (store.getState().login) {
      const response = await axios
        .post("https://tools.dev.enmon.tech/api/auth/local", {
          identifier: initialCredentials.email,
          password: initialCredentials.password,
        })
        .then(
          (response) => {
            dispatch({ type: "set/UserJsxToken", payload: response.data });
          },
          (reason) => {
            console.log(reason);
          }
        );
    }
  };
}
