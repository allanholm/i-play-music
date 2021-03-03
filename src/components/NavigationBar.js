import "./NavigationBar.css";
import { Link } from "@reach/router";

export default function NavigationBar() {
	return (
		<div className="navigationBar">
			<ul>
				<li>
					<Link to="/albums">
						<img src="./images/icons/pulse.png" alt="navIcon" />
					</Link>
				</li>
				<li>
					<Link to="/playlists">
						<img src="./images/icons/microphone.png" alt="" />
					</Link>
				</li>
				{/* TODO make images stack */}
				<li className="navigationBar__middleItem">
					<Link to="/">
						<img src="./images/icons/middleInner.png" alt="" />
					</Link>
				</li>
				<li>
					<Link to="/theme">
						<img src="./images/icons/theme.png" alt="" />
					</Link>
				</li>
				<li>
					<Link to="/categories">
						<img src="./images/icons/settings.png" alt="" />
					</Link>
				</li>
			</ul>
		</div>
	);
}
