import axios from "axios";
import { useDispatch } from "react-redux";
import "../context/content-fetcher";
import store from "../context/store";

export default function Login() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "login/LogIn", payload: "nice" });
    const state = store.getState();
    if (state.login.loggedIn) {
      console.log("Logged in");
      console.log(state);
    } else {
      console.log("Logged out");
      console.log(state);
    }
  };
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  async function userLogin(email, password) {
    const response = await axios.post(
      "https://tools.dev.enmon.tech/api/auth/local",
      {
        identifier: email,
        password: password,
      }
    );
    return response.data.jwt;
  }
  function handleLogin() {
    const email = document.querySelectorAll("input.email");
    const password = document.querySelectorAll("input.password");
    if (isValidEmail(email)) {
      userLogin(email, password).then(dispatch("set/UserJsxToken"));
    }
    // dispatch();
  }
  //FIX: useEffect is called twice

  return (
    <main>
      <div className="nice">
        <form>
          <label htmlFor="first">Email</label>
          <input type="text" id="first" name="first"></input>
          <label htmlFor="last">Password</label>
          <input type="password" id="last" name="last"></input>
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
      <div className="login" onClick={handleClick}>
        Fetch Token
      </div>
      {/* <div className="login" onClick={(e) => Show(e)}>
        Show Data
      </div> */}
    </main>
  );
}
