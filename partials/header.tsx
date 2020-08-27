import Menu from "./menu"

const Header = () => (
    <header className="main-header">
        <div className="main-wrapper">
            <div className="logo-wrapper">
                <img className="logo-image" src="images/header_logo_gdg.png" />
            </div>
            <div className="flex"></div>
            <Menu></Menu>
        </div>
    </header>
)

export default Header
