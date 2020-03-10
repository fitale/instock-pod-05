import React, { Component } from "react";
import "./styles/main.css";

import loadingImg from "./assets/icons/loading.svg";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Inventory from "./components/Inventory";
import Warehouses from "./components/Warehouses";
import Product from "./components/Product";
import ModalComp from "./components/ModalComp";

export default class App extends Component {
  state = {
    inventory: [],
    warehouses: [],
    count: 0
  };

  getInventory() {
    return axios.get("http://localhost:5000/api/inventory");
  }

  getWarehouses() {
    return axios.get("http://localhost:5000/api/warehouses");
  }
  updateTheState = props => {
    this.setState({
      inventory: props
    });
  };

  async componentDidMount() {
    axios
      .all([this.getWarehouses(), this.getInventory()])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];

          this.setState({
            warehouses: responseOne.data,
            inventory: responseTwo.data
          });
        })
      )
      .catch(errors => {
        console.log(errors);
      });
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  async handleUploadSubmit(event) {
    event.preventDefault();
    this.props.closeModalNow();
    await this.uploadAProduct();
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
                  <Inventory
                    {...props}
                    updateTheState={this.updateTheState}
                    deleteHandler={this.deleteHandler}
                    inventory={this.state.inventory}
                  />
                )}
                exact
              />
              <Route
                path="/warehouses"
                render={props => (
                  <Warehouses {...props} warehouses={this.state.warehouses} />
                )}
              ></Route>
              <Route path="/createnew" component={ModalComp} />
              <Route path="/:id" component={Product} />
            </Switch>
          </Router>
        </>
      );
    }
  }
}
