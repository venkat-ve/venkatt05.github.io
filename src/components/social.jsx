import Github from "../images/GitHub-Mark.png";
import Insta from "../images/instagram.png";
import Twitter from "../images/twitter.png";
import logo from "../images/sun_logo.png";

export default function Social() {
    return (<div className='social-container'>
        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="venkat-v-0113b5184" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/venkat-v-0113b5184?trk=profile-badge">Venkat V</a></div>
        <div className="github-container"><image src={Github} alt='GitHub'/></div>
        <div classname="insta-container"><image src={Insta} alt='Instagram'/></div>
        <div classname="twitter-container"><image src={Twitter} alt='Twitter'/></div>
        <div classname="email-container"><image src={logo} alt='alt'/></div>
    </div>);
}