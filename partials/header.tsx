import Menu from "./menu"

const Header = () => (
    <div className="theme-header mdl-layout__header mdl-layout__header--waterfall">
        <div className="mdl-layout__header-row">
            <span className="theme-title mdl-layout-title">
                <img className="theme-logo-image" src="images/header_logo_gdg.png" />
            </span>
            <div className="theme-header-spacer mdl-layout-spacer"></div>

            <Menu></Menu>

            <span className="theme-mobile-title mdl-layout-title">
                <img className="theme-logo-image" src="images/header_logo_gdg.png" />
            </span>
        </div>
    </div>
)

export default Header
