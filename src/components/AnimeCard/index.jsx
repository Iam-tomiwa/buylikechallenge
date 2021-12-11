import "./style.scss";

const AnimeCard = ({item: {image_url, url, title}}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="anime-card"
    >
      <div className="card-media">
        <img src={image_url} alt={title} />
      </div>
      <div className="card-body">{title}</div>
    </a>
  );
};

export default AnimeCard;
