import "../context/content-fetcher";
import {
  DataAndStyleTogether,
  default as LoginFetch,
} from "../context/content-fetcher";
export default function Login() {
  return (
    <main>
      <div className="login" onClick={(e) => LoginFetch(e)}>
        nice
      </div>

      <div className="login" onClick={(e) => DataAndStyleTogether(e)}>
        Fetch Meters
      </div>
    </main>
  );
}
