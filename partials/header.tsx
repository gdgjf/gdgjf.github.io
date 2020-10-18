import Logotipo from "./logotipo";
import Menu from "./menu";

const Header = () => (
  <header className="main-header">
    <div className="main-wrapper">
      <div className="logo-wrapper">
        <a href="/">
          <Logotipo />
        </a>
      </div>
      <Menu></Menu>
    </div>
  </header>
);

export default Header;
