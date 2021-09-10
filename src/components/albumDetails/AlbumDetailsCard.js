import "./AlbumDetailsCard.scss";

export default function AlbumDetailsCard({album}) {
  return(
    <div className="albumDetailsCard">
      <img src={album.images?.[0].url} alt="album cover art" className="albumDetailsCard__img"/>
      <div className="albumDetailsCard__box">
        <h1 className="albumDetailsCard__heading">{album.name}</h1>
        <p className="albumDetailsCard__tracks">{album.total_tracks} Songs</p>
      </div>
      <p className="albumDetailsCard__type">Genres hashtags {album.genres}</p>
    </div>
  );
}