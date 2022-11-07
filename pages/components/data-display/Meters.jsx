import { useSelector } from "react-redux";
import store from "../../../context/store";

const isTokenNotEmpty = (store) => store.token;

export default function Meters() {
  const dispatch = store.dispatch;

  const token = useSelector((state) => {
    state.token;
    // dispatch(getMetersCreator(state.token));
  });
  console.log(token);
  const Meters = () => {
    const whatToRender = "nice";
    function render() {
      return (
        <>
          {whatToRender}
          {/* <h1>nice</h1> */}
        </>
      );
    }
    return render();
  };
  // Button();
  return Meters();
}
