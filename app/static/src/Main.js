import React, { Component } from "react";
import { Route,NavLink,HashRouter} from "react-router-dom";
import Home from "./Home";
import Redis from "./Redis";

class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
          <h1>Redis</h1>
          {/*<ul className="header">*/}
            {/*<li><NavLink to="/home">Home</NavLink></li>*/}
            {/*<li><NavLink to="/stuff">Stuff</NavLink></li>*/}
            {/*<li><NavLink to="/contact">Contact</NavLink></li>*/}
          {/*</ul>*/}
          <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/:md5" activeStyle={{color: 'red'}} component={Redis}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default Main;