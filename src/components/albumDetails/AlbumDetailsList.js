import "./AlbumDetailsList.scss";
import AlbumDetailsSongCard from "./AlbumDetailsSongCard";

export default function AlbumDetailsList({songs}) {
  var songArray = [];
  songArray = songs;
  return(
    <div className="albumDetailsList">
      {songArray.map(function ( song ) {
        return <AlbumDetailsSongCard key={song.id} song={song}/>
      })}
    </div>
  );
}