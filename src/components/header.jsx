import logo from "../images/sun_logo.png";

export default function Header({ switchTheme }) {
  return (
    <header className="App-header">
      <div
        className="header-image"
        onClick={switchTheme}
        style={{ cursor: "pointer" }}
      >
        <img className="App-logo header-wrap" src={logo} alt="theme" />
      </div>
      <div className="header-content">
        <ul className="header-links">
          <li>
            <a href="#hire" className="Resume-box">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
