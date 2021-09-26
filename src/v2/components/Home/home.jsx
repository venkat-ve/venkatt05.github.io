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
      <div className="home-name">
        <div>
        <h1 id="name">venkat.</h1>
        </div>
        <img src={warrow} alt="arrow" className='common-vector home-arrow'/>
      </div>
      <main className="main-container" id='main'>
      <div id="punch-line">
        <div>
          <h3>I build things for the web.</h3>
        </div>
      </div>
        <article className="tech">
        <Intro/>
        </article>
        <Contact/>
        <Footer />
      </main>
    </>
  );
}
