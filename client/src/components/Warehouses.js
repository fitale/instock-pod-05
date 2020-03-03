import React, { Component } from "react";
import Arrow from "../assets/icons/icon-arrow-right.svg";

export default class Warehouses extends Component {
  render() {
    return (
      <>
        <main className="main__warehouses">
          <div className="warehouses__header">
            <h1 className="warehouses__header-text">Locations</h1>
          </div>
          <div className="warehouses">
            <div className="warehouse">
              <div className="warehouse__left">
                <div className=" warehouse__block warehouse__first">
                  <div className="warehouse__field warehouse__title">
                    My Cool Warehouse
                  </div>
                  <div className="warehouse__field warehouse__address">
                    469 King St W, Toronto, ON
                  </div>
                </div>

                <div className=" warehouse__block warehouse__second">
                  <div className=" warehouse__field warehouse__contact">
                    Saul Goodman
                  </div>
                  <div className=" warehouse__field warehouse__contact-title">
                    West Wing Boss Hog
                  </div>
                </div>
                <div className=" warehouse__block warehouse__third">
                  <div className="warehouse__field warehouse__phone">
                    +1 416 678 2345
                  </div>
                  <div className=" warehouse__field warehouse__email">
                    weinberg@instack.com
                  </div>
                </div>

                <div className="warehouse__block warehouse__fourth">
                  <div className=" warehouse__field warehouse__categories">
                    Industrial, Automotive, Heavy, Mechanical, Engineering,
                    Transportation
                  </div>
                </div>
              </div>

              <div className="warehouse__right">
                <img
                  alt="cool arrow"
                  className="warehouse__arrow"
                  src={Arrow}
                ></img>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}
