import Menu from "./menu"

const Header = () => (
    <header className="main-header">
        <div className="main-wrapper">
            <div className="logo-wrapper">
                <a href="/">
                    <img className="logo-image" src="images/gdgjf-chapter-logo.png"/>
                </a>
            </div>
            <div className="flex"></div>
            <Menu></Menu>
        </div>
    </header>
)

export default Header
