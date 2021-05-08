import logo from "../logo.svg";

export default function Header(){
return (
<header className="App-header">
    <div className="header-image">
    <img src={logo} className="App-logo header-wrap" alt="logo" />
    </div>
    <div className="header-content">
    <ul className='header-links'>
        <li>Profile</li>
        <li>Hi</li>
        <li>Hey</li>
    <li><div className='Resume-box'>Resume</div></li>
    </ul>
    </div>
</header>);
}