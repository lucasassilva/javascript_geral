import styles from "./App.module.css";
import { Router, Routes, Route, Link } from "solid-app-router";
import { lazy } from "solid-js";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));

function App() {
  return (
    <div>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link class="navbar-brand" href="/">
            Solid JS
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <Link class="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main class="container mt-5" id="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer class="fixed-bottom p-4 bg-light d-flex justify-content-end" id="footer">
          <p class={styles.lead}>
            Desenvolvido com  <i class="fas fa-heart text-danger"></i>
             &nbsppor <strong>Lucas Alves</strong>
          </p>
        </footer>
      </Router>
    </div>
  );
}
export default App;
