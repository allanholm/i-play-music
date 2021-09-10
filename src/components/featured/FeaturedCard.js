import { Link } from "@reach/router";
import "./FeaturedCard.scss";

export default function FeaturedCard({album}) {
	return (
    <Link to={"/albums/" + album.id} className="link__featuredCard">
      <div className="featuredCard">
        <img 
        className="featuredCard__img" 
        src={album.images[0].url} 
        alt="album art" />
        <p className="featuredCard__title">{album.name}</p>
        <p className="featuredCard__category">{album.album_type}</p>
      </div>
		</Link>

	);
}
