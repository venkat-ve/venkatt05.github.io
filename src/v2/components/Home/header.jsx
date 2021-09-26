import { useEffect } from "react";
import github from '../../assets/images/github-light.png';

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
        <li><a className='links' href="https://storage.googleapis.com/venkat-documents/Venkat-Resume.pdf" target='_blank' rel='noreferrer'>Resume</a></li>
      </ul>
      <a className='github-icon' href="https://github.com/venkatt05" target='_blank' rel='noreferrer'><img src={github} alt='GitHub' /></a>
    </header>
  );
}
