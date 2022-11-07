import axios from "axios";
import { initialState } from "./appState";
export default function getMetersReducer(state = initialState, action) {
  if ((state.type = "get/Meters")) {
    return {
      ...state,
      meters: [...action.payload],
    };
  }
}
export function getMeters(jwt) {
  return async function saveMetersThunk(dispatch, getState) {
    const initialCredentials = { jwt };
    console.log("token", jwt.payload);
    try {
      console.log("Trying try; jwt: ", jwt);
      if (jwt) {
        const getRequest = await axios
          .get("https://tools.dev.enmon.tech/api/inventory-meters", {
            headers: { Authorization: "Bearer " + jwt.payload },
          })
          .then((e) => {
            dispatch({ type: "get/Meters", payload: e.data });
            console.log("Get Request", e);
            console.log("Get Request data:", e.data);
          });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
}
