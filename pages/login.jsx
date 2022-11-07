import { useDispatch } from "react-redux";
import "../context/content-fetcher";
import { getToken } from "../context/states/setTokenReducer";
import { store } from "../context/store";

export default function Login() {
  const dispatch = useDispatch();
  const email = "homework@enmon.tech";
  const password = "GHrSyhF5m6M8G5PT";
  console.log(store);
  const handleClick = () => {
    // dispatch({ type: "login/LogIn", payload: "nice" });

    if (state.login.loggedIn) {
      console.log("Logged in");
      console.log(state);
    } else {
      console.log("Logged out");
      console.log(state);
    }
  };
  // return response.data.jwt;

  async function handleLogin(e) {
    e.preventDefault();
    const notValidClass = "wrong";

    const email = document.querySelector("form .email");
    const password = document.querySelector("form .password");

    if (isValidEmail(email.value)) {
      console.log(email.value, password.value);
      const saveNewTokenThunk = getToken(email.value, password.value);
      dispatch(saveNewTokenThunk);
      email.value = "";
      password.value = "";
    } else {
      email.classList = [`email ${notValidClass}`];
      email.insertAdjacentHTML(
        "afterend",
        `<p class="${notValidClass} notice">Please give us valid email</p>`
      );
      console.log("NOT valid emali");
    }
  }
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function removeWrong(element) {
    const form = [...document.querySelector("form")];

    const email = (document.querySelector("form .email").classList = ["email"]);
    form.forEach((element) => {
      //   console.log("element", element);
      //   console.log("lastElementCHild: ", element.parentNode.lastElementChild);
      if (element.parentNode.lastElementChild.className == "wrong notice") {
        element.parentNode.lastElementChild.remove();
      }
    });
  }
  //FIX: useEffect is called twice

  return (
    <main>
      <div className="login">
        <form
          onClick={(element) => removeWrong(element)}
          onSubmit={handleLogin}
        >
          <div className="row">
            <label htmlFor="last2">Email</label>
            <input
              type="text"
              className="email"
              id="nice"
              name="last2"
              defaultValue={email}
            ></input>
          </div>
          <div className="row">
            <label htmlFor="last">Password</label>
            <input
              type="password"
              id="last"
              className="password"
              name="last"
              defaultValue={password}
            ></input>
          </div>
          <div className="row">
            <button className="submit-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="login" onClick={handleClick}>
        Fetch Token
      </div>
    </main>
  );
}
