import ErrorBoundary from "../ErrorBoundary";
import UnderHeadingBar from "../UnderHeadingBar";
import FeaturedAlbumCard from "./FeaturedAlbumCard";
import "./FeaturedAlbums.css";

export default function FeaturedAlbums({ albums }) {
	var allAlbums = [];
	allAlbums = albums;

	return (
    <ErrorBoundary>
      <div className="featuredAlbums">
        <UnderHeadingBar title="Featured Albums" />
        <div className="featuredAlbumsSlider">
          {allAlbums.map(function (album) {
            return <FeaturedAlbumCard key={album.id} album={album} />;
          })}
        </div>
      </div>
    </ErrorBoundary>
	);
}
