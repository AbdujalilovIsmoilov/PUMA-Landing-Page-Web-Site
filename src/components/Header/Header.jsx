import "./header.scss";
const Header = (props) => {
  const { logo } = props;
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav__box">
            <a href="index.html" className="nav__box_link">
              <img
                src={logo}
                alt="logo"
                title="logo"
                className="nav__box_link-logo"
              />
            </a>
            <ul className="nav__box_list">
              <li className="nav__box_list_item">
                <a href="#" className="nav__box_list_item-link">
                  Menu
                </a>
              </li>
              <li className="nav__box_list_item">
                <a href="#" className="nav__box_list_item-link">
                  About
                </a>
              </li>
              <li className="nav__box_list_item">
                <a href="#" className="nav__box_list_item-link">
                  Feature
                </a>
              </li>
              <li className="nav__box_list_item">
                <a href="#" className="nav__box_list_item-link">
                  Gallary
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__box">
            <button type="button" className="nav__box-btn">
              Buy Now
            </button>
          </div>
          <i className="fa fa-bars"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
