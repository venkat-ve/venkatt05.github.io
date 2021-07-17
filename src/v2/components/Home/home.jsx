import "../../styles/global.css";
import "../../styles/home.css";
import Header from "./header";
import user from "../../assets/images/user.png";

export default function Home() {
  return (
    <>
      <Header />
      <h1 id="name">venkat.</h1>
      <main className="main-container">
      <h3 id="punch-line">I build things for the web</h3>
          <article className="home-hero-article">
            <img src={user} alt="profile" />
            <p className="description">
              I'm a software engineer who specializes in building exceptional
              <br/>
              web apps. Currently, I'am an engineer in{" "}
              <a className="links" href="/">
                FULL Creative
              </a>{" "}
              building <br/>products that helps people to connect from anywhere.
            </p>
          </article>
      </main>
    </>
  );
}
