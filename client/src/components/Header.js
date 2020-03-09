import React from "react";
import logo from "../assets/logos/logo-instock.svg";

export default class MyComponent extends React.Component {
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
            <div className="navigation__options">
              <a href="/">
                <h2 className="navigation__options-text">Inventory</h2>
              </a>
            </div>
            <div className="navigation__options">
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
