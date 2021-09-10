import "./Categories.scss";
import Category from "../components/categories/Category";
import Heading from "../components/Heading";
import SiteHeader from "../components/SiteHeader";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import axios from "axios";

export default function Categories() {
  var [token] = useContext(TokenContext);
  var [content, setContent] = useState([]);

	useEffect(
		function () {
			axios
				.get("https://api.spotify.com/v1/browse/categories", {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then(response => setContent(response.data.categories.items));
		},
		[token, setContent]
	);

	return (
		<div className="categoriesPage">
			<SiteHeader title="Categories" />
			<Heading title="Categories" />
      {content.map(function (content) {
        return <Category key={content.id} title={content.name} />
      })}
		</div>
	);
}
