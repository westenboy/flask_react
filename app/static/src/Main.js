import React, { Component } from "react";
import { Route,NavLink,HashRouter} from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Stuff from "./Stuff";

class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
          <h1>React路由技术</h1>
          <ul className="header">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
              <Route exact path="/home" component={Home}/>
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default Main;