import "./ImageSlider.scss";
import PlaylistCard from "./PlaylistCard";

export default function ImageSlider({ playlists }) {
  var playlistArray = [];
  playlistArray = playlists;

 

	return (
    <div className="imageSlider">
      {playlistArray.map(function ( playlist ) {
        return <PlaylistCard key={ playlist.id }playlist={ playlist } />;
      })}
    </div>
  )
}