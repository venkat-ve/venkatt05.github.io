import Insta from "../images/instagram.png";
import Twitter from "../images/twitter.png";
import Linkedin from "../images/linkedin.png";

export default function Social() {
  return (
    <div className="social-container-wrap">
      <img src={Insta} alt="Instagram" className="s-logo" />
      <img src={Twitter} alt="Twitter" className="s-logo" />
      <img src={Linkedin} alt="Linked-In" className="s-logo" />
      <div class="vl" />
    </div>
  );
}
