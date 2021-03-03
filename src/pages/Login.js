import "./Login.css";
import querystring from "querystring";

export default function Login() {
	var queryParameters = querystring.stringify({
		response_type: "code",
		client_id: "2b0c41503b384d559d85a9fcd226480d",
		scope: "user-read-private user-read-email playlist-read-private playlist-read-collaborative",
		redirect_uri: "http://localhost:8888/callback",
		state: "kdhd7fjdnvclcvpsis9akamndbv49576fhfvcsopasl",
	});

	return (
		<div className="loginPage">
			<h1>Login</h1>
			<a href={`https://accounts.spotify.com/authorize?${queryParameters}`}>Log in with Spotify</a>
		</div>
	);
}
