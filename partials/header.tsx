import Menu from "./menu";

const Header = () => (
  <header className="main-header">
    <div className="main-wrapper">
      <div className="logo-wrapper">
        <a href="/">
          {/* <img className="logo-image" src="images/gdgjf-chapter-logo.png"/> */}
          <img style={{ height: "30px" }} src="images/gdg-logo.svg" alt="" />
          <div>
            <img
                style={{ height: "20px", transform: "translateX(10px)" }}
                src="images/j.svg"
                alt=""
            />
            <img
                style={{ height: "20px", transform: "translateX(88px)" }}
                src="images/f.svg"
                alt=""
            />
            <img style={{ height: "20px" }} src="images/uiz-de-ora.svg" alt="" />
          </div>
        </a>
      </div>
      <div className="flex"></div>
      <Menu></Menu>
    </div>
  </header>
);

export default Header;
