import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Page not found</h1>
      <p>The page you are looking for is not available.</p>
      <Link className="btn btn-accent" href="/">
        Back home
      </Link>
    </main>
  );
}
