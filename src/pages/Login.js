import "./Login.scss";
import querystring from "querystring";
import { IoPersonCircleOutline, IoKey, IoFingerPrint } from "react-icons/io5";

export default function Login() {
	var queryParameters = querystring.stringify({
		response_type: "code",
		client_id: "2b0c41503b384d559d85a9fcd226480d",
		scope: "user-read-private user-read-email playlist-read-private playlist-read-collaborative",
		redirect_uri: window.location.href.includes("allanholm")
    ? "https://iplaymusic-allanholm.netlify.app/callback"
    : "http://localhost:8888/callback",
		state: "kdhd7fjdnvclcvpsis9akamndbv49576fhfvcsopasl",
	});

	return (
		<div className="loginPage">
			<h1 className="loginPage__heading">Log In</h1>
      <form className="loginPage__form">
        <label className="loginPage__form__label" >Username</label>
        <div className="loginPage__form__borderDiv">
          <input className="loginPage__form__field" type="text" placeholder="Enter your username" name="uname"/>
          <IoPersonCircleOutline className="loginPage__form__icon"/>
        </div>

        <label className="loginPage__form__label" >Password</label>
        <div className="loginPage__form__borderDiv">
          <input className="loginPage__form__field" type="password" placeholder="Enter your password" name="psw" />
          <IoKey className="loginPage__form__icon"/>
        </div>
      </form>
			<a className="loginPage__button" href={`https://accounts.spotify.com/authorize?${queryParameters}`}>Log in</a>
      <div className="loginPage__fingerprintCon">
        <a href={`https://accounts.spotify.com/authorize?${queryParameters}`}><IoFingerPrint className="loginPage__fingerprint"/></a>
      </div>
      <p className="loginPage__fingerprintText">One - touch login</p>
		</div>
	);
}
