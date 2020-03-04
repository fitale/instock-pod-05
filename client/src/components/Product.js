import React from 'react'
import backarrow from '../assets/icons/icon-back-arrow.svg'

function Product() {
    return (
      <>
        <div className="product">
          <div className="product__head">
            <div className="product__head-title">
              <img
                className="product__head-arrow"
                src={backarrow}
                alt="back arrow"
              />
              <h2 className="product__head-text"> Product Name </h2>
            </div>
            <div className="product__status"> In Stock </div>
          </div>
          {/* end of product header */}

          {/* product info section */}
          <div className="details">
            {/* product description */}
            <div className="details__description">
              <p className="details__description-label">ITEM DESCRIPTION</p>
              <p className="details__description-words">
                Here is a more detailed summary of the product name, it’s uses,
                industries and possible attributes that could be used to
                describe the product.
              </p>
            </div>

            {/* product data container */}
            <div className="info">
              {/* Ordered by and Reference Number container */}
              <div className="info__one">
                <div className="info__one-sub">
                  <p className="info__one-sub-title">ORDERED BY</p>
                  <p className="info__one-sub-text">Mark Saunders</p>
                </div>
                <div className="info__one-sub">
                  <p className="info__one-sub-title">REFERENCE NUMBER</p>
                  <p className="info__one-sub-text">JK2020FD7811201</p>
                </div>
              </div>
              {/* Last ordered and Location container */}
              <div className="info__two">
                <div className="info__two-sub">
                    <p className="info__two-sub-title">LAST ORDERED</p>
                    <p className="info__two-sub-text">2018-05-24</p>
                </div>
                <div className="info__two-sub">
                    <p className="info__two-sub-title">LOCATION</p>
                    <p className="info__two-sub-text">Toronto, CAN</p>
                </div>
              </div>
              {/* Quantity and Categories container */}
              <div className="info__three">
                <div className="info__three-sub">
                  <p className="info__three-sub-title">QUANTITY</p>
                  <p className="info__three-sub-text">12000</p>
                </div>
                <div className="info__three-sub">
                  <p className="info__three-sub-title">CATEGORIES</p>
                  <p className="info__three-sub-text">
                    Industrial, Automotive, Heavy, Mechanical, Engineering,
                    Transportation, Sales
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="button">
            <button className="button__actual" type="submit">EDIT</button>
          </div>
        </div>
      </>
    );
}

export default Product
