
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";


class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', width: "300px", margin: "0 auto" }}>
          <div>
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page</Link>
          </div>
          <div style={{ alignItems: "center" }}>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
