export default function Social({ data }) {
  return (
    <div>
      <a href={data.link}>
        <img className='social-icons' src={data.logo} alt={data.name} />
      </a>
    </div>
  );
}
