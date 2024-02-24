export default function ContactItem({ icon, headline, desc, url }) {
  return (
    <div className="item">
      {icon}
      <div className="right">
        <h4>{headline}</h4>
        <a href={url} target="_blank">
          {desc}
        </a>
      </div>
    </div>
  );
}
