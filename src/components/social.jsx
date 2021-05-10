import Insta from "../images/instagram.png";
import Linkedin from "../images/linkedin.png";
import Github from "../images/github.png"

const SOCIALS = {
  github : {
    logo : Github,
    alt : 'Github',
    link : 'https://github.com/venkatt05'
  },
  insta : {
    logo : Insta,
    alt : 'Instagram',
    link : 'https://www.instagram.com/vxkat_'
  },
  linkedin : {
    logo : Linkedin,
    alt : 'LinkedIn',
    link : 'https://www.linkedin.com/in/venkat-x'
  },
};

export default function Social() {
  return (
    <div className="social-container-wrap" data-aos="fade-up">
      {Object.values(SOCIALS).map(value => <a href={value.link} target="__blank">
        <img src={value.logo} alt={value.alt} className={`s-logo ${value.alt === "Github" ? "git" : ""}`} />
      </a>)}
      <div class="vl" />
    </div>
  );
}
