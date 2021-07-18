import { SOCIAL } from "../../../utils/commonUtils";
import Social from "./social";

export default function Contact() {
  return (
    <section className="home-contact" id='contact'>
      <h3>Get In Touch</h3>
      <br/>
      <p>
        My inbox is always open. Whether you have a question or just want to say
        hi, I'll try
        <br />
        my best to get back to you!. Best to reach me is through my social
        handles. If that
        <br />
        doesn't work, you can send out a mail.
      </p>
        {/* <img className="common-vector down-arrow" src={darrow} alt="arrow" /> */}
      <div className="social-cards">
        {SOCIAL.data.map((value) => (
          <Social data={value} key={value.name}/>
        ))}
      </div>
    </section>
  );
}
