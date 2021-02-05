import './NewReleaseCard.css';

export default function NewReleaseCard({album}) {
  return (
    <div className="newReleaseCard">
      <img className="newReleaseCard__image" src={album.images[2].url} alt="alt"/>
      <div>
        <p className="newReleaseCard__title">{album.name}</p>
        <p className="newReleaseCard__artist">{album.artists[0].name}</p>
      </div>
      <p className="newReleaseCard__nrSongs">{album.total_tracks + " Songs"}</p>
    </div>
  )
}