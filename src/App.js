import React from "react";
import Tasks from "./Tasks/Container";

function App() {
  return (
    <div className="App">
      <div className="py-3 jumbotron bg-white text-center">
        <div className="container">
          <h1>Mini-Kanban</h1>
          <p className="lead text-muted">
            This is an example web application of using{" "}
            <strong>useReducer</strong> of React Hooks as an alternative to
            Redux.
          </p>
        </div>
      </div>
      <div className="container-fluid py-5 bg-light">
        <Tasks />
      </div>
      <footer className="text-muted py-4">
        <div className="container">
          <p>
            © 2019 <a href="http://kerem.ws/">Kerem Sevencan</a>. Made in Berlin
            with{" "}
            <span role="img" aria-label="heart">
              💖
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
