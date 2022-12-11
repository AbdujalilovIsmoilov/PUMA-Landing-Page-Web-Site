import "./footer.scss";

export const Footer = (props) => {
  const { intro } = props.object;
  return (
    <footer className="Footer">
      <div className="container">
        <div className="Footer__container">
          <div className="Footer__container_box">
            <a className="Footer__container_box-intro" href="index.html">
              <img src={intro} alt="logo" title="logo" />
            </a>
            <p className="Footer__container_box-description">
              10 New Town Street, V2 5NW, Newstate. USA
            </p>
            <small className="Footer__container_box-small">
              shahzodbadriyev523@gmail.com
            </small>
            <div className="Footer__container_box_icons">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>
          <div className="Footer__container_box">
            <ul className="Footer__container_box_list">
              <li className="Footer__container_box_list_item">
                <h2 className="Footer__container_box_list_item-title">
                  Our services
                </h2>
                <a href="#" className="Footer__container_box_list_item-link">
                  About Us
                </a>
              </li>
              <li className="Footer__container_box_list_item">
                <a href="#" className="Footer__container_box_list_item-link">
                  Feature
                </a>
              </li>
              <li className="Footer__container_box_list_item">
                <a href="#" className="Footer__container_box_list_item-link">
                  Gallary
                </a>
              </li>
            </ul>
            <ul className="Footer__container_box_list">
              <li className="Footer__container_box_list_item">
                <h2 className="Footer__container_box_list_item-title">
                  Support
                </h2>
                <a href="#" className="Footer__container_box_list_item-link">
                  About Us
                </a>
              </li>
              <li className="Footer__container_box_list_item">
                <a href="#" className="Footer__container_box_list_item-link">
                  Feature
                </a>
              </li>
              <li className="Footer__container_box_list_item">
                <a href="#" className="Footer__container_box_list_item-link">
                  Gallary
                </a>
              </li>
            </ul>
            <ul className="Footer__container_box_list">
              <li className="Footer__container_box_list_item">
                <h2 className="Footer__container_box_list_item-title">
                  Support
                </h2>
              </li>
              <li className="Footer__container_box_list_item">
                <p className="Footer__container_box_list_item-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <p className="Footer__about">
          Copyright 2021 The PUMA All rights Reserved
        </p>
      </div>
    </footer>
  );
};
