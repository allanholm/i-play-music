import PlayerCard from "../components/player/PlayerCard";
import PlayerControls from "../components/player/PlayerControls";
import SiteHeader from "../components/SiteHeader";

export default function Player() {
	return (
		<div className="player">
			<SiteHeader title="Playing" />
			<PlayerCard />
			<PlayerControls />
		</div>
	);
}
