import "./NavigationBar.scss";
import { Link } from "@reach/router";
import { MdWifiTethering, MdLibraryMusic } from "react-icons/md";
import { IoPulse } from "react-icons/io5";
import { IoIosMicrophone } from "react-icons/io";
import { VscColorMode } from "react-icons/vsc";

export default function NavigationBar() {
	return (
		<div className="navigationBar">
			<ul>
				<li>
					<Link to="/albums">
						<IoPulse className="navigationBar__menuitem"/>
					</Link>
				</li>
        <li>
					<Link to="/playlists">
						<IoIosMicrophone className="navigationBar__menuitem"/>
					</Link>
				</li>
        <li className="navigationBar__middleLi">
					<Link to="/featured">
						<MdWifiTethering className="navigationBar__menuitem--gradient"/>
					</Link>
				</li>
        <li>
						<VscColorMode className="navigationBar__menuitem"/>
				</li>
        <li>
					<Link to="/categories">
						<MdLibraryMusic className="navigationBar__menuitem"/>
					</Link>
				</li>
			</ul>
		</div>
	);
}
