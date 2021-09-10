import SiteHeader from "../components/SiteHeader";
import "./AlbumDetails.scss";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import AlbumDetailsCard from "../components/albumDetails/AlbumDetailsCard";
import AlbumDetailsSongs from "../components/albumDetails/AlbumDetailsSongs";


export default function AlbumDetails({ id }) {

  var [token] = useContext(TokenContext);
	
  var [contentAlbum, setContentAlbum] = useState([]);

  useEffect(
		function () {
			axios
				.get(`https://api.spotify.com/v1/albums/${id}`, {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then(response => setContentAlbum(response.data));
		},
		[token, setContentAlbum, id]
	);

  var [contentSongs, setContentSongs] = useState([]);

  useEffect(
		function () {
			axios
				.get(`https://api.spotify.com/v1/albums/${id}/tracks`, {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then(response => setContentSongs(response.data.items));
		},
		[token, setContentSongs, id]
	);

	return (
		<div className="albumDetailsPage">
			<SiteHeader title="Album" />
			<AlbumDetailsCard album={contentAlbum} />
      <AlbumDetailsSongs songs={contentSongs} />
		</div>
	);
}