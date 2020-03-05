import React, { Component } from "react";
import "./styles/main.css";

import loadingImg from "./assets/icons/loading.svg";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Inventory from "./components/Inventory";
import Warehouses from "./components/Warehouses";

export default class App extends Component {
  state = {
    inventory: [],
    warehouses: []
  };

  async componentDidMount() {
    await axios.get("http://localhost:5000/api/warehouses").then(res2 => {
      this.setState(
        {
          warehouses: res2.data
        },
        console.log(res2.data)
      );
    });
    // await axios.get("http://localhost:5000/api/inventory").then(res1 => {
    //   this.setState(
    //     {
    //       inventory: res1.data,
    //       warehouses: []
    //     }
    //     // console.log(res1.data)
    //   );
    // });
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if ((this.state.inventory.length || this.state.warehouses.length) === 0) {
      return (
        <div>
          <img src={loadingImg} alt="loading" />
        </div>
      );
    } else {
      return (
        <>
          <Router>
            <Header />
            <Switch>
              <Route
                path="/"
                render={props => (
                  <Inventory {...props} inventory={this.state.inventory} />
                )}
                exact
              />
              <Route
                path="/warehouses"
                render={props => (
                  <Warehouses {...props} warehouses={this.state.warehouses} />
                )}
              ></Route>
            </Switch>
            {/* <Inventory inventory={this.state.inventory} /> */}
          </Router>
        </>
      );
    }
  }
}
