import pattern from '../../assets/images/pattern-a.png';

export default function Intro() {
  return (
    <article className="home-hero-article col-12">
      <div className="content">
        <h3>About Me.</h3>
        <p className="description">
          Hello! My name is Venkatesh and I enjoy creating things that's live on the
          web. My interest in development started back in my college days, where
          I sit and try to solve problems for hours and hours. And I also remember
          inspecting and playing around with browser console imagining that Imma
          hacker, it was always fun.
          <br />
          <br />
          <br />Fast foward to today, I'am a Junior Software Engineer at <a className='links cta' href="https://full.io" target="_blank" rel="noreferrer">
            FULLCreative
          </a>
          {' '}aka{' '}
          <a className='links cta' href="https://anywhereworks.com" target="_blank" rel="noreferrer">
            AnywhereWorks
          </a>
          {' '} building reliable products for clients across the globe.
        </p>
      </div>
    </article>
  );
}
