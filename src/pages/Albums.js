import FeaturedAlbums from "../components/albums/FeaturedAlbums";
import NewReleases from "../components/albums/NewReleases";
import Heading from "../components/Heading";
import SiteHeader from "../components/SiteHeader";
import "./Albums.css";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";

export default function Albums() {
	var [token] = useContext(TokenContext);
	var [content, setContent] = useState([]);

	useEffect(
		function () {
			axios
				.get("https://api.spotify.com/v1/browse/new-releases?limit=10", {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then(response => setContent(response.data.albums.items));
		},
		[token, setContent]
	);

	return (
		<div className="albumsPage">
			<SiteHeader title="Music" />
			<Heading title="All Albums" />
			<FeaturedAlbums albums={content} />
			<NewReleases albums={content} />
			<NavigationBar className="navigationBar" />
		</div>
	);
}
