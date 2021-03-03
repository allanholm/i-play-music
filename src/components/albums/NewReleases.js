import ErrorBoundary from "../ErrorBoundary";
import UnderHeadingBar from "../UnderHeadingBar";
import NewReleaseCard from "./NewReleaseCard";
import "./NewReleases.css";

export default function NewReleases({ albums }) {
	var albumArray = [];
	albumArray = albums;

	return (
    <ErrorBoundary>
      <div className="newReleases">
        <UnderHeadingBar title="New Releases" />
        {albumArray.map(function (album) {
          return <NewReleaseCard key={album.id} album={album} />;
        })}
      </div>
    </ErrorBoundary>
	);
}
