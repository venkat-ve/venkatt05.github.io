import "../../styles/global.css";
import "../../styles/home.css";
import Header from "./header";
import Footer from "./footer";
import user from "../../assets/images/user.svg";
import Contact from "./contact";
import darrow from "../../assets/images/down-arrow.svg";
import warrow from "../../assets/images/down-arrow-white.svg";
import { useEffect } from "react";

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
        <article className="home-hero-article">
          <h3>About.</h3>
          <img src={darrow} alt="arrow" className="arrow common-vector" />
          <div className="hero-sectoion-content">
            <img src={user} alt="profile" className="common-vector" />
            <p className="description">
              I'm a software engineer who specializes in building exceptional
              <br />
              web apps. Currently, I'am an engineer in{" "}
              <a className="links" href="/">
                FULL Creative
              </a>{" "}
              building <br />
              products that helps people to connect from anywhere.
            </p>
          </div>
        </article>
        <article className="tech"></article>
        <Contact/>
        <Footer />
      </main>
    </>
  );
}
