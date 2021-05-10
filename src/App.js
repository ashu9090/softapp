import "./App.css";
import { React } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "./pages/About";
import Feature from "./pages/Feature";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
//!https://preview.themeforest.net/item/prooland-app-landing-page/full_screen_preview/31223264
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/feature" component={Feature}></Route>
          <Route exact path="/blog" component={Blog}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
