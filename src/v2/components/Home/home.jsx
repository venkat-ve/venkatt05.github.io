import "../../styles/global.css";
import "../../styles/home.css";
import Footer from "./footer";
import Contact from "./contact";
import Intro from "./Intro";

export default function Home() {

  const openResume = () => {
    window.open('https://storage.googleapis.com/venkat-documents/Venkat-Resume.pdf', '_blank');
  }

  return (
    <>
      <div className="home col-12">
        <div className="left-wrapper">
        <h5>Hi There, this is</h5>
        <h2 id="name">venkat.</h2>
        <h4>Software Engineer</h4>
        </div>
        <div className="right-wrapper">
          <button className="cta" onClick={openResume}>Resume</button>
          <button className="cta" onClick={() => window.scrollTo({top:1000})}>Contact</button>
        </div>
      </div>
      <main className="main-container col-12" id='main'>
      <div id="punch-line">
          <h3>I build things for the web.</h3>
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
