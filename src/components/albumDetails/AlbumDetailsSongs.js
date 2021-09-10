import AlbumDetailsList from "./AlbumDetailsList";
import "./AlbumDetailsSongs.scss";

export default function AlbumDetailsSongs({ songs }) {
  return(
    <div className="albumDetailsSongs">
      <p className="albumDetailsSongs__heading">All songs</p>
      <div className="albumDetailsSongs__list">
        <AlbumDetailsList songs={songs} />
      </div>
    </div> 
  );
}