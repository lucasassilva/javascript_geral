import { Router, Link } from "preact-router";
import Home from "../routes/home";
import About from "../routes/about";

const App = () => (
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
	  <Link class="navbar-brand" href="/">
         Preact JS
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

    <main id="content">
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
    </main>

	<footer id="footer">
		<p class="lead">Desenvolvido por Lucas Alves</p>
	</footer>

  </div>
);

export default App;
