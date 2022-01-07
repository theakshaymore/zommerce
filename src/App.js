import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Card from "./components/Card";
import Cart from "./components/Cart";
import CardDetail from "./components/CardDetail";
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/detail/:id">
              <CardDetail />
            </Route>
          </Switch>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* <Footer /> */}
        <footer className="footer mt-auto">
          <div className="container-fluid bg-dark text-white text-center py-3">
            <div className="text-center p-4">
              © 2022 Copyright:
              <span className="text-reset fw-bold">Zommerce.com</span>
            </div>
            <h6>If you got any questions, feel free to reach out</h6>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
