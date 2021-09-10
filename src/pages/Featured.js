import FeaturedCall from "../components/featured/FeaturedCall";
import Heading from "../components/Heading";
import SiteHeader from "../components/SiteHeader";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import TokenContext from "../TokenContext";
import "./Featured.css";

export default function Featured() {

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

	return (
		<div className="featuredPage">
			<SiteHeader title="Featured" />
			<Heading title="Featured" />
			<FeaturedCall albums={contentAlbums}/>
		</div>
	);
}
