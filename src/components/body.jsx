import { useEffect } from "react";
import Contact from "./contact";
import FirstFold from "./firstfold";
import Footer from "./footer";
import Header from "./header";
import Social from "./social";

export default function Body({ switchTheme }) {

  useEffect(()=>{
    window.AOS.init();
  }, []);

  return (
    <div className="App">
      <div className='top-hr'></div>
      <Header switchTheme={switchTheme} />
      <div className="main-wrap">
        <FirstFold />
        <Contact />
        <Footer />
        <div className='top-hr' style={{"paddingInline":"100px"}}></div>
      </div>
      <Social />
    </div>
  );
}
