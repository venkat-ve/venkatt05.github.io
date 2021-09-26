import user from "../../assets/images/user.svg";

export default function Intro() {
  return (
    <article className="home-hero-article">
      <div className="hero-section-content">
        <h3>About.</h3>
        <img src={user} alt="profile" className="common-vector" />
        <p className="description">
          I'am a software engineer who specializes in building exceptional
          web apps. Currently, I'am an engineer in{" "}
          <a className="links" href="/">
            FULL Creative
          </a>.
        </p>
      </div>
    </article>
  );
}
