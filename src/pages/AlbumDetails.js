import SiteHeader from "../components/SiteHeader";
import "./AlbumDetails.css";

export default function AlbumDetails({ id }) {
	return (
		<div className="albumDetailsPage">
			<SiteHeader title="Album" />
			<h1>{id}</h1>
		</div>
	);
}
