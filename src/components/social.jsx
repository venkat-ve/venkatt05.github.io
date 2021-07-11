import Insta from "../images/instagram.svg";
import Linkedin from "../images/linkedin.svg";
import Github from "../images/github.svg"

const SOCIALS = {
  github : {
    logo : Github,
    alt : 'Github',
    link : 'https://github.com/venkat-ve'
  },
  insta : {
    logo : Insta,
    alt : 'Instagram',
    link : 'https://www.instagram.com/venkaat__'
  },
  linkedin : {
    logo : Linkedin,
    alt : 'LinkedIn',
    link : 'https://www.linkedin.com/in/venkat-x'
  },
};

export default function Social() {
  return (
    <div className="social-container-wrap" data-aos="fade-up" data-aos-duration="2000">
      <div className="vl" />
      {Object.values(SOCIALS).map((value,index) => <a href={value.link} target="__blank" key={index}>
        <img src={value.logo} alt={value.alt} className={`s-logo ${value.alt === "Github" ? "git" : ""}`} />
      </a>)}
    </div>
  );
}
