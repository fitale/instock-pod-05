import React from "react";
import logo from "../assets/logos/logo-instock.svg";
import ReactDOM from "react-dom";
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.inventoryHeader = React.createRef();
    this.LocationHeader = React.createRef();
  }

  componentDidMount = () => {
    const inventory_header = document.getElementsByClassName(
      "inventory_header"
    );
    const location_header = document.getElementsByClassName("location_header");
    if (window.location.pathname === "/warehouses/") {
      location_header[0].classList.add("active");
      inventory_header[0].classList.remove("active");
    } else {
      inventory_header[0].classList.add("active");
      location_header[0].classList.remove("active");
    }
  };

  render() {
    return (
      <>
        <header className="header">
          <div className="header__container">
            <a href="/" className="header__anchor">
              <img className="header__logo" src={logo} alt="company logo" />
            </a>
          </div>
          <nav className="navigation">
            <div
              ref={this.inventoryHeader}
              className="navigation__options inventory_header"
            >
              <a href="/">
                <h2 className="navigation__options-text">Inventory</h2>
              </a>
            </div>
            <div
              ref={this.locationHeader}
              className="navigation__options location_header"
            >
              <a href="/warehouses/">
                <h2 className="navigation__options-text">Location</h2>
              </a>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
