import { useEffect } from "react";
import Contact from "./contact";
import FirstFold from "./firstfold";
import Footer from "./footer";
import Header from "./header";
import Social from "./social";

export default function Body({ switchTheme }) {

  useEffect(()=>{
    window.AOS.init();
    window.onscroll = ()=>{
      if(window.scrollY >= 500) {
        document.getElementById('header-shadow').classList.add("onscroll-shadow");
    } else {
    document.getElementById('header-shadow').classList.remove("onscroll-shadow");
}
  };
  }, []);

  return (
    <div className="App">
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
