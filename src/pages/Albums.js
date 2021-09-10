import FeaturedAlbums from "../components/albums/FeaturedAlbums";
import NewReleases from "../components/albums/NewReleases";
import Heading from "../components/Heading";
import SiteHeader from "../components/SiteHeader";
import "./Albums.scss";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";

export default function Albums() {

  // getting the featured albums from the api.
  var [token] = useContext(TokenContext);
	var [contentAlbums, setContentAlbums] = useState([]);

	useEffect(
		function () {
			axios
				.get("https://api.spotify.com/v1/albums?ids=41MnTivkwTO3UUJ8DrqEJJ,382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc", {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then(response => setContentAlbums(response.data.albums));
		},
		[token, setContentAlbums]
	);

  // getting the new releases from api
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
			<FeaturedAlbums albums={contentAlbums} />
			<NewReleases albums={content} />
			<NavigationBar className="navigationBar" />
		</div>
	);
}
