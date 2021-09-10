import "./AlbumDetailsSongCard.scss";
import { msToMinutes } from "../Helpers";
import { FaPlay } from "react-icons/fa";

export default function AlbumDetailsSongCard({ song }) {
  return(
    <div className="albumDetailsSongCard">
      <div className="albumDetailsSongCard__playCon">
        <FaPlay className="albumDetailsSongCard__icon"/>
      </div>
			<div className="albumDetailsSongCard__overflowBox">
				<p className="albumDetailsSongCard__title">{song.name}</p>
				<p className="albumDetailsSongCard__artist">{song.artists?.[0].name}</p>
			</div>
			<p className="albumDetailsSongCard__songLength">{msToMinutes(song.duration_ms)}</p>
    </div>
  );
}