import { useEffect } from "react";

export default function Header() {

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 700) {
        document.getElementById("home-header")
          .classList.add("shadow");
      } else {
        document.getElementById("home-header")
          .classList.remove("shadow");
      }
    };
  }, [])

  return (
    <header id='home-header'>
      <ul className='nav-list'>
        <li><a className='links' href="/">Home</a></li>
        <li><a className='links' href="#contact">Contact</a></li>
        <li><a className='links' href="/">Resume</a></li>
      </ul>
    </header>
  );
}
