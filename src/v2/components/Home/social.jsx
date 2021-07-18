export default function Social({ data }) {
  return (
    <div>
      <a href={data.link} target='__blank'>
        <img src={data.logo} alt={data.name} />
      </a>
    </div>
  );
}
