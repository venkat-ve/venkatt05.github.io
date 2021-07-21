import "../../styles/global.css";
import "../../styles/home.css";
import Header from "./header";
import Footer from "./footer";
import Contact from "./contact";
import warrow from "../../assets/images/down-arrow-white.svg";
import { useEffect } from "react";
import Intro from "./Intro";

export default function Home() {

  useEffect(() => {
    document.querySelector('.home-name img').addEventListener('click', () => {
      window.scroll(0,730);
    })
  })

  return (
    <>
      <Header />
      <div className="home-name">
        <h1 id="name">venkat.</h1>
        <img src={warrow} alt="arrow" className='common-vector home-arrow'/>
      </div>
      <main className="main-container" id='main'>
        <h3 id="punch-line">I build things for the web</h3>
        <Intro/>
        <article className="tech"></article>
        <Contact/>
        <Footer />
      </main>
    </>
  );
}
