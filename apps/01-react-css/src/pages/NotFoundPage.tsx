import { Link } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

export function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="not-found">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <Link className="button" to="/">
          Back Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
