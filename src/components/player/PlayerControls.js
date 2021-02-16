import "./PlayerControls.css";

export default function PlayerControls() {
	return (
		<div className="playerControls">
			<div className="playerControls__trackLength">
				<input className="playerControls__input" type="range" min="0" max="100" step="0.01" value="0"></input>
				<div className="playerControls__inputTime">
					<p>0:00</p>
					<p>3:40</p>
				</div>
				<div className="playerControls__buttons">
					<img className="playerControls__buttonsSkipBack" src="./images/player/skipBack.png" alt="" />
					<img className="playerControls__buttonsRewind" src="./images/player/rewind.png" alt="" />
					<div className="playerControls__buttonsPlayWrap">
						<img className="playerControls__buttonsPlay" src="./images/player/play.png" alt="" />
					</div>
					<img className="playerControls__buttonsFastForward" src="./images/player/fastForward.png" alt="" />
					<img className="playerControls__buttonsSkipForward" src="./images/player/skipForward.png" alt="" />
				</div>
			</div>
		</div>
	);
}
