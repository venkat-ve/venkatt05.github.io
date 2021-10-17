import { SOCIAL } from '../../../utils/commonUtils';
import Social from '../../components/Home/social';

export default function Footer() {
    return (<footer>
          <div className="social-cards">
        {SOCIAL.data.map((value) => (
          <Social data={value} key={value.name}/>
        ))}
        </div>
        <p id='copy-write'>
          © 2021{" "}
          <span>
            <a className="links" href="https://www.instagram.com/venkaat__" target="__blank">
              venkat
            </a>
          </span>{" "}
          · Designed & Developed with ❤️
        </p>
    </footer>);
}