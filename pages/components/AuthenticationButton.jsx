import Link from "next/link";
import { useSelector } from "react-redux";
import store from "../../context/store";
// Returns element that manages user loggin or out from app
const isUserLoggedIn = (store) => store.loggedIn;

export default function AuthenticationButton() {
  const dispatch = store.dispatch;

  function handleClick() {
    // console.log("nice token you have in state", store.getState());

    dispatch({ type: "remove/UserJsxToken", payload: "" });
  }

  const Button = () => {
    const btnState = useSelector((state) => state.token.loggedIn);
    const whatToRender = btnState ? (
      <Link className="auth-button logout" href="/login" onClick={handleClick}>
        LogOut
      </Link>
    ) : (
      <Link className="auth-button login" href="./login">
        Login
      </Link>
    );
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
  return Button();
}

// function render() {
//   // 3.1) Get the current store state
//   const state = store.getState();
//   // 3.2) Extract the data you want
//   const newValue = state.value.toString();

//   // 3.3) Update the UI with the new value
//   valueEl.innerHTML = newValue;
// }

// // 5) Dispatch actions based on UI inputs
// document.getElementById("increment").addEventListener("click", function () {
//   store.dispatch({ type: "counter/incremented" });
// });
