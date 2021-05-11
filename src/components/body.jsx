import { useEffect } from "react";
import Contact from "./contact";
import FirstFold from "./firstfold";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./navigation";
import Social from "./social";

export default function Body({ switchTheme }) {

  useEffect(()=>{
    window.AOS.init();
  }, []);

  return (
    <div className="App">
      <div className="main-wrap">
        <Header switchTheme={switchTheme} />
        <FirstFold />
        <Contact />
        <Footer />
      </div>
      <Navigation />
      <Social />
    </div>
  );
}
