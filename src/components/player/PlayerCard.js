import "./PlayerCard.css";

export default function PlayerCard() {
	return (
		<div className="playerCard">
			<div className="playerCard__images">
				<img className="playerCard__imageBack" src="./images/player/soundWave.png" alt="soundwave" />
				<img className="playerCard__imageFront" src="./images/player/disc.png" alt="album art" />
			</div>
			<h2 className="playerCard__title">Song Name</h2>
			<p className="playerCard__artist">Artist Name</p>
		</div>
	);
}
