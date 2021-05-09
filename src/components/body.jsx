import Contact from "./contact";
import FirstFold from "./firstfold";
import Footer from "./footer";
import Header from "./header";
import Social from "./social";

export default function Body({ switchTheme }) {
  return (
    <div className="App">
      <div className="main-wrap">
        <Header switchTheme={switchTheme} />
        <FirstFold />
        <Contact />
        <Footer />
      </div>
      <Social />
    </div>
  );
}
