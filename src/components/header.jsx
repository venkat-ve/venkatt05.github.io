import logo from "../logo.svg";

export default function Header(){
return (
<header className="App-header">
    <div className="header-image">
    <h3 className="App-logo header-wrap">{'><'}</h3>
    </div>
    <div className="header-content">
    <ul className='header-links'> 
    <li><div className='Resume-box'>Hire me</div></li>
    </ul>
    </div>
</header>);
}