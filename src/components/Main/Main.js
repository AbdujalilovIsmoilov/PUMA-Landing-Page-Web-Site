import React from "react";
import "./main.scss";

export const Main = (props) => {
  const { footwear } = props;
  return (
    <main className="main">
      <div className="container">
        <div className="main__container">
          <div className="main__container_box">
            <h1 className="main__container_box-title">
              Life is better in running shoes.
            </h1>
            <p className="main__container_box-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eu
              ultrices ut
            </p>
          </div>
          <div className="main__container_box">
            <img
              src={footwear}
              alt="footwear"
              title="footwear"
              className="main__container_box-img"
            />
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
        <div className="main__buy">
          <div className="main__buy_container">
            <div className="main__buy_container_box">
              <p className="main__buy_container_box-name">Brand</p>
              <h4 className="main__buy_container_box-title">
                Puma
                <i className="fa-solid fa-chevron-down"></i>
              </h4>
            </div>
            <div className="main__buy_container_box">
              <p className="main__buy_container_box-name">Person</p>
              <h4 className="main__buy_container_box-title">
                man
                <i className="fa-solid fa-chevron-down"></i>
              </h4>
            </div>
            <div className="main__buy_container_box">
              <p className="main__buy_container_box-name">Size</p>
              <h4 className="main__buy_container_box-title">
                large
                <i className="fa-solid fa-chevron-down"></i>
              </h4>
            </div>
            <div className="main__buy_container_box">
              <p className="main__buy_container_box-name">Price</p>
              <h4 className="main__buy_container_box-title">
                $150
                <i className="fa-solid fa-chevron-down"></i>
              </h4>
            </div>
            <div className="main__buy_container_box">
              <button className="main__buy_container_box-btn" type="button">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
