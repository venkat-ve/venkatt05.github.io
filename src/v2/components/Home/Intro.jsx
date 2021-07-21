import user from "../../assets/images/user.svg";
import darrow from "../../assets/images/down-arrow.svg";

export default function Intro() {
  return (
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
  );
}
