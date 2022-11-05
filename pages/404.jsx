import Link from "next/link";

export default function errorPage(e) {
  console.log("error why", e);
  return (
    <div className="404">
      <h1>Nice, something went wrong</h1>
      <p>Try one of these pages:</p>
      <div className="link-list">
        <Link href="/login">Login</Link>
        <Link href="/meters">Meters</Link>
      </div>
    </div>
  );
}
