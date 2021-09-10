import "./Playlists.scss";
import SiteHeader from "../components/SiteHeader";
import Heading from "../components/Heading";
import ImageSlider from "../components/playlists/ImageSlider";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import axios from "axios";
import AlbumDetailsSongs from "../components/albumDetails/AlbumDetailsSongs";

export default function Playlists() {

  var [token] = useContext(TokenContext);

  var [content, setContent] = useState([]);

	useEffect(
		function () {
			axios
				.get("https://api.spotify.com/v1/browse/featured-playlists?limit=6", {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then(response => setContent(response.data.playlists.items));
		},
		[token, setContent]
	);
  
  var [contentSongs, setContentSongs] = useState([]);

  useEffect(
  function () {
    axios
      .get(`https://api.spotify.com/v1/playlists/37i9dQZF1DWXJfnUiYjUKT/tracks`, {
        headers: {
          Authorization: "Bearer " + token.access_token,
        },
      })
      .then(response => setContentSongs(response.data.items));
  },
  [token, setContentSongs]
);

	return (
		<div className="playlistPage">
			<SiteHeader title="Playlists" />
			<Heading title="Playlists" />
      <ImageSlider playlists= { content } />  
      <AlbumDetailsSongs songs={contentSongs} />

		</div>
	);
}
