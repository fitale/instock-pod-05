import React from "react";
import logo from "../assets/logos/logo-instock.svg";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <a className="header__anchor">
            <img
              className="header__logo"
              src={logo}
              alt="company logo"
            />
          </a>
        </div>

        <nav className="navigation">
          <div className="navigation__options">
            {/* <a href="./index.html"> */}
            <h2 className="navigation__options-text">Inventory</h2>
            {/* </a> */}
          </div>
          <div className="navigation__options">
            {/* <a href="./pages/shows.html"> */}
            <h2 className="navigation__options-text">Location</h2>
            {/* </a> */}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
