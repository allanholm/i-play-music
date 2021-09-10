import { Link } from "@reach/router";
import "./FeaturedAlbumCard.scss";

export default function FeaturedAlbumCard({ album }) {
	return (
		<Link to={"/albums/" + album.id}>
			<img
				className="featuredAlbumCard__image"
				src={album.images[1].url}
				alt={"album art"}
			/>
		</Link>
	);
}
