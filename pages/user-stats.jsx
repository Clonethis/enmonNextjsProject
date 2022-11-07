import { useDispatch, useSelector } from "react-redux";
import { getMetersCreator } from "../context/states/actionCreators";
import { getMeters } from "../context/states/getMetersReducer";
import store from "../context/store";
import AuthenticationButton from "./components/AuthenticationButton";
import Meters from "./components/data-display/meters";

// Updating UI based on state change from Redux
// const selectedMeterers = (state) => state.meters;

const checkIfJwt = (state) => state;
function MetersList() {
  const dispatch = useDispatch();
  console.log(checkIfJwt);
  // const meters = useSelector();
  if (store.getState().token.loggedIn) {
    console.log("state in matersList: ", checkIfJwt);
    console.log("Token", store.getState());
    dispatch(getMeters(getMetersCreator(store.getState().token.token)));
  }
  const nice = useSelector((state) => state.token);

  //   const renderedMeters = meters.map((meter) => {
  //     return <Meter key={meter.id} props={meter}></Meter>;
  //   });

  return (
    <div className="meters">
      <h1>List of meters</h1>
      <AuthenticationButton />
      <Meters />
      {/* <ul>{renderedMeters}</ul> */}
    </div>
  );
}
export default MetersList;
