export default function Contact() {

  const draftMail = () => {
    window.open('mailto:venkatesh.velan5@gmail.com', '__blank');
  }

  return (
    <section className="contact" id='contact'>
      <h3>Get In Touch.</h3>
      <p>
        My inbox is always open. Whether you have a question or just want to say
        hi, I'll try
        <br />
        my best to get back to you!. Best to reach me is through my social
        handles. If that
        <br />
        doesn't work, you can send out a mail.
      </p>
      <button className="cta" onClick={draftMail}>Say Hi !</button>
    </section>
  );
}
