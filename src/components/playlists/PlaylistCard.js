import "./PlaylistCard.scss";

export default function PlaylistCard( {playlist} ) {
  return(
    <div className="playlistCard">
      <img className="playlistCard__img" src={playlist.images?.[0].url} alt="album art" />
      <h3 className="playlistCard__title">{ playlist.name }</h3>
    </div>
  );
}