import './NewReleaseCard.css';

export default function NewReleaseCard({album}) {
  return (
    <div className="newReleaseCard">
      <img className="newReleaseCard__image" src={album.images[0].src} alt={album.title + " by " + album.artist}/>
      <div>
        <p className="newReleaseCard__title">{album.title}</p>
        <p className="newReleaseCard__artist">{album.artist}</p>
      </div>
      <p className="newReleaseCard__nrSongs">{album.songs.length + " Songs"}</p>
    </div>
  )
}