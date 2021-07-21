import { useEffect } from "react";
import github from '../../assets/images/github.svg';

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
        <li><a className='links' href="/">Resume</a></li>
        <li><a className='links' href="https://github.com/venkatt05" target='_blank' rel='noreferrer'>GitHub</a></li>
      </ul>
    </header>
  );
}
